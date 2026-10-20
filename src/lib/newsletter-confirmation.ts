import { createCipheriv, createDecipheriv, createHmac, randomBytes } from 'node:crypto';

const DAY = 86_400_000;
const PURPOSE = 'robsaric.com/newsletter-confirmation/v1';
const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export function validEmail(email: string): boolean {
  return email.length > 0 && email.length <= 254
    && email.split('@', 1)[0].length <= 64 && EMAIL_PATTERN.test(email);
}

function key(secret: string): Buffer {
  if (!/^[a-f0-9]{64}$/i.test(secret)) throw new Error('Invalid newsletter confirmation configuration.');
  return Buffer.from(secret, 'hex');
}

/** Authenticated encryption keeps addresses out of URL, referrer and access logs. */
export function createConfirmationToken(email: string, secret: string, now = Date.now()): string {
  if (!validEmail(email)) throw new Error('Invalid newsletter address.');
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key(secret), iv);
  cipher.setAAD(Buffer.from(PURPOSE));
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify({ email, issued: now }), 'utf8'), cipher.final(),
  ]);
  return Buffer.concat([iv, cipher.getAuthTag(), ciphertext]).toString('base64url');
}

export function readConfirmationToken(
  token: string, secret: string, now = Date.now(),
): { email: string } | null {
  const encryptionKey = key(secret);
  if (!/^[A-Za-z0-9_-]{40,1024}$/.test(token)) return null;
  try {
    const bytes = Buffer.from(token, 'base64url');
    if (bytes.toString('base64url') !== token) return null;
    const decipher = createDecipheriv('aes-256-gcm', encryptionKey, bytes.subarray(0, 12));
    decipher.setAAD(Buffer.from(PURPOSE));
    decipher.setAuthTag(bytes.subarray(12, 28));
    const payload: unknown = JSON.parse(Buffer.concat([
      decipher.update(bytes.subarray(28)), decipher.final(),
    ]).toString('utf8'));
    if (typeof payload !== 'object' || payload === null
      || !('email' in payload) || typeof payload.email !== 'string'
      || !validEmail(payload.email)
      || !('issued' in payload) || typeof payload.issued !== 'number'
      || !Number.isSafeInteger(payload.issued)
      || payload.issued > now || now - payload.issued >= DAY) return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

/** Resend retains keys for 24h. A UTC-day bucket bounds repeat email requests. */
export function confirmationSendKey(email: string, secret: string, now = Date.now()): string {
  return `notes-confirm/${createHmac('sha256', key(secret))
    .update(`${PURPOSE}/${Math.floor(now / DAY)}/${email}`).digest('hex')}`;
}
