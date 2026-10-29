// One short performance, followed by eight quiet seconds. All animations share
// a clock and pause together; no per-frame JavaScript or background polling.
const CYCLE = 15000;
export function initializeHalloweenCharacters(previewStill = false) {
  document.querySelectorAll<HTMLElement>('[data-halloween]').forEach(scene => {
    if (scene.dataset.initialized) return;
    scene.dataset.initialized = 'true';
    if (previewStill) { scene.dataset.state = 'preview-still'; return; }
    const wizard = scene.querySelector<HTMLElement>('[data-wizard]');
    const button = scene.querySelector<HTMLButtonElement>('[data-halloween-toggle]');
    const stage = scene.querySelector<HTMLElement>('.halloween-stage');
    if (!wizard || !button || !stage || typeof wizard.animate !== 'function') return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    let visible = false, ready = false, paused = false;
    const add = (element: HTMLElement | SVGElement, frames: Keyframe[]) => {
      const animation = element.animate(frames, { duration: CYCLE, iterations: Infinity, fill: 'both' });
      animation.pause(); animations.push(animation);
    };
    const prepare = () => {
      if (ready) return;
      add(wizard, [
        { backgroundPosition: '0% 50%', offset: 0, easing: 'steps(1,end)' },
        { backgroundPosition: '33.333333% 50%', offset: .05, easing: 'steps(1,end)' },
        { backgroundPosition: '66.666667% 50%', offset: .09, easing: 'steps(1,end)' },
        { backgroundPosition: '100% 50%', offset: .14, easing: 'steps(1,end)' },
        { backgroundPosition: '66.666667% 50%', offset: .28, easing: 'steps(1,end)' },
        { backgroundPosition: '33.333333% 50%', offset: .37, easing: 'steps(1,end)' },
        { backgroundPosition: '0% 50%', offset: .43, easing: 'steps(1,end)' },
        { backgroundPosition: '0% 50%', offset: 1 },
      ]);
      scene.querySelectorAll<HTMLElement>('[data-spell]').forEach((tile, i) => {
        // The CSS layout is also the readable still composition. Animate out
        // from the wand to those positions, and then upward off the stage.
        const x = stage.clientWidth * .52 - tile.offsetLeft;
        const y = stage.clientHeight * .38 - tile.offsetTop;
        const start = .09 + i * .025, settle = .22 + i * .025, leave = .34 + i * .02;
        const angle = [-8, 7, 5, -12, 8][i];
        add(tile, [
          { opacity: 0, transform: `translate(${x}px,${y}px) scale(.3) rotate(${angle - 12}deg)`, offset: 0 },
          { opacity: 0, transform: `translate(${x}px,${y}px) scale(.3) rotate(${angle - 12}deg)`, offset: start, easing: 'cubic-bezier(.16,1,.3,1)' },
          { opacity: 1, transform: `translate(0,0) scale(1) rotate(${angle}deg)`, offset: settle },
          { opacity: 1, transform: `translate(2px,-7px) scale(1) rotate(${angle + 3}deg)`, offset: leave, easing: 'ease-in' },
          { opacity: 0, transform: `translate(8px,-40px) scale(.96) rotate(${angle + 6}deg)`, offset: leave + .065 },
          { opacity: 0, transform: `translate(8px,-40px) scale(.96) rotate(${angle + 6}deg)`, offset: 1 },
        ]);
      });
      const spark = scene.querySelector<SVGElement>('[data-spark]');
      if (spark) add(spark, [
        { opacity: 0, transform: 'scale(.5)', offset: 0 },
        { opacity: 0, transform: 'scale(.5)', offset: .085 },
        { opacity: .8, transform: 'scale(1)', offset: .12 },
        { opacity: 0, transform: 'scale(1.2)', offset: .18 },
        { opacity: 0, transform: 'scale(1.2)', offset: 1 },
      ]);
      ready = true;
    };
    const sync = () => {
      button.hidden = preference.matches || !ready;
      if (preference.matches) {
        animations.forEach(animation => animation.cancel());
        animations.length = 0; ready = false;
        scene.dataset.state = 'reduced'; return;
      }
      if (!ready) return;
      const running = visible && !document.hidden && !paused;
      animations.forEach(animation => running ? animation.play() : animation.pause());
      scene.dataset.state = running ? 'playing' : 'paused';
    };
    const preload = new Image();
    let loaded = false;
    preload.onload = () => { loaded = true; if (!preference.matches) prepare(); sync(); };
    preload.src = '/illustrations/rob-ink/halloween.webp';
    preference.addEventListener('change', () => { if (!preference.matches && loaded) prepare(); sync(); });
    button.addEventListener('click', () => {
      paused = !paused;
      const label = (paused ? scene.dataset.resumeLabel : scene.dataset.pauseLabel) ?? '';
      button.setAttribute('aria-label', label); button.title = label;
      button.dataset.paused = String(paused); sync();
    });
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('pagehide', () => animations.forEach(animation => animation.pause()));
    window.addEventListener('pageshow', sync);
    if ('ResizeObserver' in window) {
      let width = stage.clientWidth, height = stage.clientHeight;
      new ResizeObserver(() => {
        if (!ready || (width === stage.clientWidth && height === stage.clientHeight)) return;
        width = stage.clientWidth; height = stage.clientHeight;
        const time = animations[0]?.currentTime ?? 0;
        animations.forEach(animation => animation.cancel());
        animations.length = 0; ready = false; prepare();
        animations.forEach(animation => { animation.currentTime = time; });
        sync();
      }).observe(stage);
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .5; sync();
    }, { threshold: .5 }).observe(stage);
    sync();
  });
}
