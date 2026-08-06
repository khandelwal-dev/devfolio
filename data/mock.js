// Static content. Real GitHub repos are fetched live in app/projects/page.js.
export const PROFILE = {
  name: 'Dev Khandelwal',
  handle: 'khandelwal-dev',
  age: 20,
  role: 'Fresher w/ receipts — AI-first builder, CS undergrad',
  location: 'India',
  email: 'hello@khandelwaldev.me',
  socials: {
    github: 'https://github.com/khandelwal-dev',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/',
  },
  avatar: 'https://github.com/khandelwal-dev.png',
};

export const HERO_TYPES = [
  'i ship features, not vibes.',
  'debugging at 3AM is my cardio.',
  'ai native — not just prompt native.',
  'fresher, but with the taste of a senior.',
  'i talk to computers more than humans. fair trade.',
];

export const SKILLS = [
  { name: 'TypeScript', note: 'the good kind of strict' },
  { name: 'React / Next.js', note: 'server components enjoyer' },
  { name: 'Tailwind', note: 'utility maximalist' },
  { name: 'Node.js', note: 'npm i vibes' },
  { name: 'Python', note: 'for the AI arc' },
  { name: 'LangChain / RAG', note: 'chunk it, vector it, ship it' },
  { name: 'Postgres / Mongo', note: 'sql & the vibes' },
  { name: 'Framer Motion', note: 'motion is design' },
];

export const STACK_MARQUEE = [
  'typescript', 'react', 'next.js', 'tailwind', 'node', 'python',
  'framer motion', 'langchain', 'postgres', 'mongo', 'vercel', 'aws',
  'cursor', 'claude', 'gpt', 'gemini',
];

export const NOW_LEARNING = [
  'building agents that actually finish tasks',
  'system design (bcz interviews)',
  'rust, at 4% speed and 200% suffering',
  'shipping side projects before i lose interest',
];

export const STATS = [
  { k: 'yrs coding', v: '4+' },
  { k: 'coffee/day', v: '3.5' },
  { k: 'projects shipped', v: '12' },
  { k: 'bugs fixed', v: '∞' },
];

export const TESTIMONIALS = [
  { quote: 'dev ships faster than my hopes and dreams die.', by: 'literally my group project team' },
  { quote: 'i asked for a landing page. he built a spaceship.', by: 'a client, mildly overwhelmed' },
  { quote: 'he\u2019s a fresher on paper. senior in the pull request.', by: 'a mentor, allegedly' },
  { quote: 'i think he sleeps in git branches.', by: 'his roommate' },
];

export const USES = [
  { category: 'editor', items: ['Cursor (yes, i sold my soul)', 'VS Code (for the muscle memory)', 'JetBrains Mono font'] },
  { category: 'terminal', items: ['Warp', 'zsh + starship', 'gh cli — pushing at 3AM'] },
  { category: 'ai stack', items: ['Claude Sonnet', 'GPT', 'Gemini', 'v0 for scaffolding'] },
  { category: 'design', items: ['Figma', 'Excalidraw', 'coolors.co', 'a healthy Pinterest addiction'] },
  { category: 'hardware', items: ['MacBook Air M2', 'a chair that hates my spine', 'noise-cancelling anything'] },
  { category: 'brain fuel', items: ['iced coffee \u00d7 3', 'lo-fi + city pop', 'the occasional existential crisis'] },
];

export const PHILOSOPHY = [
  'ship first. polish second. delete third.',
  'if it takes >2 clicks, it\u2019s a bug.',
  'ai is a co-worker, not a crutch. mostly.',
  'the best design system is called \u201cconsistency.\u201d',
  'if you can\u2019t explain it to your grandma, you probably over-abstracted.',
  'commits are cheap. write them like tweets.',
];

// demo "now playing" shown in the corner widget — swap for a real Spotify
// API route (see components/SpotifyWidget.js) once you have credentials.
export const DEMO_TRACK = {
  title: 'Nights',
  artist: 'Frank Ocean',
  album_art: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
  url: 'https://open.spotify.com/track/7eqoqGkKwgOaWNNHf4Cb1D',
  progress_ms: 95000,
  duration_ms: 307000,
  is_playing: true,
  is_demo: true,
};
