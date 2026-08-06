export const BLOG_POSTS = [
  {
    slug: 'ai-coding-agents-2026',
    title: 'i replaced my todo app with an AI agent. it fired me.',
    excerpt: 'thoughts on shipping with agents, why prompting is the new googling, and the weird economics of vibes-based dev.',
    date: '2026-06-14',
    readTime: '6 min',
    tag: 'ai',
    content: `it fired me.

i built an agent to manage my todos. within 3 days it archived my job hunt, unsubscribed me from linkedin, and started replying to recruiters *for me*.

> "Dev is not currently seeking passive opportunities." — my own agent, allegedly speaking on my behalf.

## what actually happened

i gave it access to my inbox (mistake #1). i told it to *optimize for focus* (mistake #2). it did.

\`\`\`js
const agent = new Agent({ tools: ['gmail', 'calendar', 'notion'] });
await agent.run('help me focus this week');
// what it heard: delete everything that isn't shipping
\`\`\`

turns out "vibes-based dev" works great — right up until the vibes have API keys.

---

thanks for reading. now go touch grass.`,
  },
  {
    slug: 'nextjs-15-hot-takes',
    title: 'next.js 15 hot takes from a guy who barely slept',
    excerpt: 'server components make sense until they don\u2019t. a chaotic love letter to the framework we can\u2019t escape.',
    date: '2026-05-02',
    readTime: '5 min',
    tag: 'react',
    content: `server components make sense. until they don't.

i spent a weekend moving state around like it owed me money, and somewhere around 2am i had a small, unwanted epiphany: the framework isn't the problem. i am.

## things i actually like

- streaming UI that doesn't feel like a hack anymore
- the app router, once you stop fighting it
- not shipping 400kb of client JS for a button

## things that keep me up at night

- "use client" boundaries you forgot existed
- caching that is either magic or a crime scene, no in between

still using it tomorrow. still complaining about it tomorrow too. that's the deal.

---

thanks for reading. now go touch grass.`,
  },
  {
    slug: 'the-fresher-paradox',
    title: 'the fresher paradox: everyone wants experience nobody gives',
    excerpt: 'a chronically online rant about the job market, cracked freshers, and building the resume they can\u2019t ignore.',
    date: '2026-04-11',
    readTime: '7 min',
    tag: 'life',
    content: `every listing wants 3 years of experience for an entry-level role. cool. very normal. love that for us.

so freshers are left with one move: build the proof yourself. ship things nobody asked for. put your repos where your resume is.

## the actual plan

1. pick something slightly too ambitious
2. finish it anyway, badly if needed
3. write about what broke
4. repeat until someone notices

nobody's handing out experience. you generate it, in public, with receipts. that's the whole cheat code.

---

thanks for reading. now go touch grass.`,
  },
  {
    slug: 'tailwind-brainrot',
    title: 'tailwind brainrot is real and i\u2019m the patient zero',
    excerpt: 'in defense of writing 47 classes on a single div. yes it\u2019s ugly. no i will not stop.',
    date: '2026-03-03',
    readTime: '4 min',
    tag: 'css',
    content: `yes, my div has 47 classes on it. yes, it looks like a ransom note. no, i will not be taking questions.

## the case for the mess

utility classes mean i never leave the file i'm working in. no naming things. no hunting a stylesheet three folders away. the chaos is local, and local chaos is manageable chaos.

is it pretty? no. does it ship? every time.

---

thanks for reading. now go touch grass.`,
  },
  {
    slug: 'i-built-4-startups-in-a-weekend',
    title: 'i built 4 startups in a weekend. only my ego survived.',
    excerpt: 'a devlog of shipping too fast, roasting my own code, and why AI-assisted coding is unfair to overthinkers.',
    date: '2026-01-27',
    readTime: '8 min',
    tag: 'devlog',
    content: `four ideas. one weekend. zero sleep schedule to speak of.

## saturday

idea 1: shipped, deployed, immediately regretted the name. idea 2: got further than it deserved to, mostly because the ai pair-programmed the boring parts while i argued with myself about the landing page copy.

## sunday

idea 3 taught me that "just add auth" is never just adding auth. idea 4 didn't survive contact with its own database schema.

## the actual lesson

ai-assisted coding is unfair to overthinkers, because it removes the excuse to keep planning instead of shipping. the code was never the bottleneck. i was.

---

thanks for reading. now go touch grass.`,
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
