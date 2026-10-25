type Variant = 'runner' | 'evening' | 'reader' | 'wrong-turn';
type Pose = { at: number; frame: number; travel: number; opacity?: number };
const sequences: Record<Variant, { duration: number; count: number; resting: number; poses: Pose[] }> = {
  runner: { duration: 8500, count: 8, resting: 0, poses: [
    { at: 0, frame: 0, travel: 0 }, { at: 700, frame: 1, travel: .05 },
    { at: 1100, frame: 2, travel: .2 }, { at: 1450, frame: 1, travel: .35 },
    { at: 1800, frame: 2, travel: .5 }, { at: 2150, frame: 3, travel: .65 },
    { at: 2600, frame: 4, travel: .72 }, { at: 3550, frame: 5, travel: .72 },
    { at: 4350, frame: 6, travel: .72 }, { at: 6750, frame: 7, travel: .72 },
    { at: 8050, frame: 7, travel: .72, opacity: 0 }, { at: 8500, frame: 0, travel: 0 },
  ] },
  evening: { duration: 4300, count: 4, resting: 3, poses: [
    { at: 0, frame: 0, travel: 0 }, { at: 1200, frame: 1, travel: 0 },
    { at: 2300, frame: 2, travel: 0 }, { at: 3500, frame: 3, travel: 0 }, { at: 4300, frame: 3, travel: 0 },
  ] },
  reader: { duration: 3200, count: 4, resting: 3, poses: [
    { at: 0, frame: 1, travel: 0 }, { at: 1100, frame: 2, travel: 0 },
    { at: 2300, frame: 3, travel: 0 }, { at: 3200, frame: 3, travel: 0 },
  ] },
  'wrong-turn': { duration: 4700, count: 6, resting: 2, poses: [
    { at: 0, frame: 0, travel: 0 }, { at: 700, frame: 1, travel: .3 },
    { at: 1450, frame: 2, travel: .3 }, { at: 2550, frame: 3, travel: .3 },
    { at: 3250, frame: 4, travel: .3 }, { at: 3750, frame: 5, travel: .3 }, { at: 4700, frame: 5, travel: 0 },
  ] },
};

export function initializeInkCharacters(labels: { pause: string; resume: string }) {
  document.querySelectorAll<HTMLElement>('[data-ink-character]').forEach(scene => {
    const variant = scene.dataset.inkCharacter as Variant;
    const definition = sequences[variant];
    const pose = scene.querySelector<HTMLElement>('[data-ink-pose]');
    const stage = scene.querySelector<HTMLElement>('.ink-stage');
    const button = scene.querySelector<HTMLButtonElement>('[data-ink-toggle]');
    if (!definition || !pose || !stage || scene.hasAttribute('data-still')) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const looping = variant === 'runner';
    const cycle = definition.duration + (looping ? 8000 : 0);
    let visible = false, ready = false, running = false, paused = false, complete = false;
    let elapsed = 0, started = 0, raf = 0, timer = 0;
    const draw = (time: number) => {
      const points = definition.poses;
      let i = 0;
      while (i < points.length - 1 && time >= points[i + 1].at) i++;
      const current = points[i], next = points[Math.min(i + 1, points.length - 1)];
      const fraction = next.at === current.at ? 0 : Math.min(1, (time - current.at) / (next.at - current.at));
      // Discrete hand-drawn poses, with a gentle continuous move along the track.
      const travel = current.travel + (next.travel - current.travel) * fraction;
      const runway = Math.max(0, stage.clientWidth - pose.clientWidth - (variant === 'wrong-turn' ? 40 : 0));
      pose.style.backgroundPosition = `${current.frame / (definition.count - 1) * 100}% 50%`;
      // Give recovery its own beat: three deliberate brushes before standing tall.
      const dusting = variant === 'runner' && current.frame === 6;
      const brush = dusting ? ((time - current.at) % 800) / 800 : 0;
      const stroke = Math.sin(brush * Math.PI * 2);
      pose.style.transform = `translateX(${travel * runway}px)${dusting ? ` rotate(${stroke * 2}deg) translateY(${Math.abs(stroke) * 1.5}px)` : ''}`;
      pose.style.setProperty('--dust-opacity', dusting ? String(Math.sin(brush * Math.PI) * .65) : '0');
      pose.style.setProperty('--dust-drift', `${brush * 13}px`);
      scene.dataset.beat = dusting ? 'dust-off' : 'story';
      pose.style.opacity = String((current.opacity ?? 1) + ((next.opacity ?? 1) - (current.opacity ?? 1)) * fraction);
      scene.dataset.frame = String(current.frame);
    };
    const rest = () => {
      pose.style.backgroundPosition = `${definition.resting / (definition.count - 1) * 100}% 50%`;
      pose.style.transform = ''; pose.style.opacity = '1';
      pose.style.setProperty('--dust-opacity', '0');
      scene.dataset.frame = String(definition.resting);
    };
    const stop = () => {
      if (running) elapsed += performance.now() - started;
      if (looping) elapsed %= cycle;
      running = false; cancelAnimationFrame(raf); clearTimeout(timer);
    };
    const tick = (now: number) => {
      if (!running) return;
      const total = elapsed + now - started;
      const current = looping ? total % cycle : Math.min(total, definition.duration);
      draw(Math.min(current, definition.duration));
      if (!looping && current === definition.duration) {
        running = false; complete = true; scene.dataset.state = 'complete';
      } else if (looping && current >= definition.duration) {
        scene.dataset.state = 'resting';
        timer = window.setTimeout(() => { raf = requestAnimationFrame(tick); }, cycle - current);
      } else { scene.dataset.state = 'playing'; raf = requestAnimationFrame(tick); }
    };
    const sync = () => {
      if (button) button.hidden = preference.matches || !ready;
      if (preference.matches) { stop(); rest(); scene.dataset.state = 'reduced'; return; }
      const night = document.documentElement.dataset.appearance === 'night';
      const wrongAppearance = variant === 'runner' ? night : variant === 'reader' ? !night : false;
      if (!ready || !visible || document.hidden || paused || wrongAppearance) { stop(); scene.dataset.state = 'paused'; return; }
      if (!complete && !running) { started = performance.now(); running = true; raf = requestAnimationFrame(tick); }
    };
    button?.addEventListener('click', () => {
      paused = !paused; const label = paused ? labels.resume : labels.pause;
      button.setAttribute('aria-label', label); button.title = label; button.dataset.paused = String(paused); sync();
    });
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    document.addEventListener('appearancechange', sync);
    window.addEventListener('pagehide', stop);
    window.addEventListener('pageshow', sync);
    if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .65; sync();
    }, { threshold: .65 }).observe(scene);
    // No observer: retain the readable, server-rendered still rather than autoplay unseen.
    const preload = new Image();
    preload.onload = () => { ready = true; sync(); };
    preload.src = `/illustrations/rob-ink/${variant === 'reader' ? 'evening' : variant}.webp`;
    sync();
  });
}
