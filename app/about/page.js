import SectionHeader from '../../components/SectionHeader';
import { PROFILE } from '../../data/mock';
import { Coffee, Cpu, Music, Gamepad2, Brain } from 'lucide-react';

export const metadata = {
  title: 'About — Dev Khandelwal',
  description: 'CS undergrad, self-taught dev, occasional 2am philosopher. The long, unedited version.',
};

const TIMELINE = [
  { year: '2020', title: 'first line of code', body: '11th grade. c++. i printed "hello world" and felt like a wizard.' },
  { year: '2021', title: 'discovered the web', body: 'html/css/js hit different. instant feedback = instant addiction.' },
  { year: '2022', title: 'react era', body: 'components. hooks. redux (briefly). tailwind (permanently).' },
  { year: '2024', title: 'the ai arc begins', body: 'started building with LLMs. never looked back. kept my job (from myself).' },
  { year: '2026', title: 'shipping mode', body: 'freshers unite. i\u2019m out here trying to build the thing that lets me quit interviewing.' },
];

const FACTS = [
  { icon: Coffee, text: 'i drink cold coffee even in winter. this is a personality.' },
  { icon: Music, text: 'lo-fi, city pop, and one very specific frank ocean song on loop.' },
  { icon: Gamepad2, text: 'apex legends enjoyer. bronze-coded confidence. gold-coded aim (sometimes).' },
  { icon: Brain, text: 'i overthink professionally. it\u2019s in my bio, my dms, and my prs.' },
  { icon: Cpu, text: 'i have more github repos than close friends. no notes.' },
];

const LANGS = [
  { name: 'TypeScript', pct: 92 },
  { name: 'JavaScript', pct: 88 },
  { name: 'Python', pct: 70 },
  { name: 'C++', pct: 55 },
  { name: 'Kotlin', pct: 40 },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
      <section className="pt-4">
        <div className="font-mono text-xs text-black/50 mb-4">/about — the long, unedited version</div>
        <h1 className="font-display font-semibold tracking-tighter text-5xl md:text-7xl leading-[0.95]">
          i&rsquo;m dev. <span className="font-serifi italic">20.</span> <br />
          i write code, break code, <br /> and occasionally <span className="bg-lime px-2">touch grass.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-black/70 leading-relaxed">
          a cs undergrad, a self-taught developer, a brother, a friend, and an occasional philosopher
          when i&rsquo;m staring at my ceiling at 2 am wondering if <span className="italic">useEffect</span> counts as a lifestyle.
        </p>
      </section>

      {/* how it started */}
      <section className="mt-20">
        <SectionHeader path="/how-it-started" title="the origin story" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>my programming journey started in 11th grade with c++. i had zero idea what i was doing. i just liked that the computer <em>listened</em>. it was the first thing in my life that did.</p>
            <p className="text-black/70">a year later, i found web dev. logic + design + instant feedback? unreal combo. i was cooked.</p>
            <p className="text-black/70">today, i mostly work with typescript, react, next.js, and node. i also flirt with python, kotlin, dart, and enough c++ to sound smart in interviews.</p>
          </div>
          <div className="border-2 border-black bg-white p-6 sticker">
            <div className="font-mono text-xs text-black/40 mb-3">// languages i actually use</div>
            <div className="space-y-3">
              {LANGS.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between font-mono text-xs mb-1">
                    <span>{l.name}</span>
                    <span className="text-black/50">{l.pct}%</span>
                  </div>
                  <div className="h-2 bg-black/10 border border-black">
                    <div className="h-full bg-lime" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="mt-20">
        <SectionHeader path="/timeline" title="a suspicious timeline" />
        <div className="relative pl-6 md:pl-8 border-l-2 border-black">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="relative pb-10 last:pb-0">
              <div className="absolute -left-[34px] md:-left-[42px] top-0 w-6 h-6 bg-lime border-2 border-black flex items-center justify-center font-mono text-[10px] font-bold">
                {i + 1}
              </div>
              <div className="font-mono text-xs text-black/50">{t.year}</div>
              <div className="font-display text-2xl font-semibold mt-1">{t.title}</div>
              <p className="text-black/70 mt-1 max-w-xl">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* outside dev */}
      <section className="mt-20">
        <SectionHeader path="/outside-dev" title="outside the terminal" />
        <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">
          <div className="space-y-4">
            <p>when i&rsquo;m not coding, i sometimes touch grass — usually via football. other times i&rsquo;m on the terrace, listening to soft music, watching clouds, pretending i&rsquo;m in a coming-of-age movie.</p>
            <p className="text-black/70">i also game (apex, still learning), and yes, i overthink. it&rsquo;s practically a hobby now.</p>
          </div>
          <ul className="space-y-3">
            {FACTS.map((f, i) => (
              <li key={i} className="flex items-start gap-3 border-2 border-black bg-white px-4 py-3 sticker">
                <f.icon className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="font-mono text-sm">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* personality */}
      <section className="mt-20">
        <SectionHeader path="/personality" title="if we're being honest" />
        <div className="border-2 border-black bg-white p-6 md:p-10 sticker">
          <p className="text-lg md:text-xl leading-relaxed">
            i don&rsquo;t talk much online, but i genuinely like meeting new people — dev, music, or
            random late-night existential arcs. hit me up. i&rsquo;ll respond when my introvert battery recharges,
            which is any moment between <span className="bg-lime px-1">now</span> and <span className="bg-lime px-1">next week</span>.
          </p>
          <div className="mt-6 font-mono text-xs text-black/50">
            // email: <a className="underline" href={`mailto:dev-khandelwal@outlook.com`}>{PROFILE.email}</a>
          </div>
        </div>
      </section>

      {/* patch note */}
      <section className="mt-20">
        <div className="font-mono text-sm border-2 border-black bg-black text-lime p-6">
          <div className="text-lime/70">// patch note v2026.08</div>
          <div className="mt-2">+ added: ai fluency, taste, patience for design reviews</div>
          <div>+ removed: fear of shipping, sleeping schedule</div>
          <div>~ tweaked: ego (buffed), tolerance for bad ui (nerfed)</div>
          <div className="mt-2 text-lime/60">if you discover a bug in my personality, please file an issue.</div>
        </div>
      </section>
    </div>
  );
}
