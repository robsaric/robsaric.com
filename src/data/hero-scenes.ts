// Change this one value to restore the runner / evening reader. Seasonal
// scenes are separate additions; never overwrite earlier character assets.
export const HERO_SCENE: 'everyday' | 'halloween' = 'halloween';

export const HALLOWEEN = {
  description: 'Rob in a wizard hat, conjuring small pictures and OpenAI, Claude and Meta Muse symbols with a wand.',
  caption: 'Happy Halloween',
  pause: 'Pause Halloween animation',
  resume: 'Resume Halloween animation',
  brands: [
    { name: 'OpenAI', asset: 'openai.svg' },
    { name: 'Claude', asset: 'claude.svg' },
    { name: 'Meta Muse', asset: 'muse.svg' },
  ],
};
