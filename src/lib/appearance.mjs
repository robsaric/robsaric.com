export const APPEARANCE_KEY = 'rs-appearance';

export function resolveAppearance(preference, hour) {
  if (preference === 'day' || preference === 'night') return preference;
  return hour >= 7 && hour < 19 ? 'day' : 'night';
}

// Runs before paint. Clock time is read only on entry or an explicit selection,
// never on a timer while someone is reading. Storage may be unavailable.
export const appearanceBootstrap = `(() => {
  let preference = 'auto';
  try { preference = localStorage.getItem('${APPEARANCE_KEY}') || 'auto'; } catch {}
  if (!['day', 'night', 'auto'].includes(preference)) preference = 'auto';
  const root = document.documentElement;
  root.dataset.appearancePreference = preference;
  root.dataset.appearance = (${resolveAppearance.toString()})(preference, new Date().getHours());
})();`;
