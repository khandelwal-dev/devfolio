import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Github, Sparkles, Coffee, Zap } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import Marquee from '../components/Marquee';
import SectionHeader from '../components/SectionHeader';
import { PROFILE, SKILLS, NOW_LEARNING, STATS, TESTIMONIALS } from '../data/mock';
import { BLOG_POSTS } from '../data/blogPosts';

export default function Home() {
  
  return (
    <div className="pb-16">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-4 md:pt-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div className="fade-up">
            <div className="font-mono text-xs text-black/50 mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-lime ring-2 ring-black" />
              currently: shipping. sleeping is optional.
            </div>
            <h1 className="font-display font-semibold tracking-tighter text-6xl md:text-8xl leading-[0.9]">
              hey, i&rsquo;m{' '}
              <span className="relative inline-block">
                <span className="relative z-10">dev.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 md:h-4 bg-lime -z-0" />
              </span>
              <br />
              <span className="font-serifi italic text-black/80">a fresher with</span>
              <br />
              <span className="underline decoration-4 decoration-black underline-offset-4">senior-dev energy.</span>
            </h1>
            <div className="mt-6 max-w-xl">
              <Typewriter />
            </div>
            <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
              cs undergrad. mad for ai. professionally unserious, personally over-engineered.
              i build clean, weird, and occasionally useful things on the web — using code, ai,
              and a suspicious amount of caffeine.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center font-mono h-11 px-5 bg-black text-lime hover:bg-black/90 transition-colors"
              >
                see the projects <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-mono h-11 px-5 border border-black hover:bg-black hover:text-lime transition-colors"
              >
                <Github className="w-4 h-4 mr-1" /> stalk my github
              </a>
              <span className="font-mono text-xs text-black/50 ml-2">
                or press <kbd className="px-1.5 py-0.5 bg-black text-lime">enter</kbd> — jk that does nothing.
              </span>
            </div>
          </div>

          <div className="relative fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-52 md:w-64 aspect-square bg-white border-2 border-black sticker">
              <div className="tape" />
              <Image
                src={PROFILE.avatar}
                alt="dev"
                fill
                sizes="256px"
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute -bottom-4 left-2 right-2 bg-black text-lime px-3 py-1.5 font-mono text-xs flex items-center justify-between">
                <span>@{PROFILE.handle}</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> cracked
                </span>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 -rotate-[8deg] bg-lime font-mono text-[10px] px-2 py-1 border-2 border-black">
              open to work →
            </div>
          </div>
        </div>
      </section>

      {/* STATS strip */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-black divide-x-2 divide-black bg-white">
          {STATS.map((s) => (
            <div key={s.k} className="px-5 py-6">
              <div className="font-display text-4xl md:text-5xl font-semibold">{s.v}</div>
              <div className="font-mono text-xs text-black/60 mt-1">// {s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <section className="mt-16">
        <Marquee />
      </section>

      {/* ABOUT tl;dr */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/about" title="the tl;dr" action={{ to: '/about', label: 'read the long version' }} />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
            <p>i&rsquo;m dev — a 20-year-old cs student who writes code, breaks code, and asks ai to fix code (respectfully).</p>
            <p className="text-black/70">
              my work sits at the intersection of design, engineering, and &ldquo;wait, that&rsquo;s actually kinda cool.&rdquo;
              i love intuitive interfaces, weird ai experiments, and shipping side projects that i will absolutely abandon in 2–4 weeks.
            </p>
            <p className="text-black/70">i&rsquo;m a fresher on paper. in practice? i&rsquo;ve been shipping since 11th grade and roasting my own commits since.</p>
          </div>
          <div className="bg-white border-2 border-black p-5 font-mono text-sm sticker">
            <div className="text-black/50 mb-2">// vibe check</div>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <Coffee className="w-4 h-4 mt-0.5 shrink-0" /> introvert with pull request energy
              </li>
              <li className="flex gap-2">
                <Zap className="w-4 h-4 mt-0.5 shrink-0" /> ships fast, refactors later (sorry)
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 shrink-0" /> ai-native — not scared, not obsessed, just employed
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/skills" title="stack, but honest" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {SKILLS.map((s, i) => (
            <div key={s.name} className="group border-2 border-black p-4 bg-white sticker">
              <div className="font-mono text-xs text-black/40">0{i + 1}</div>
              <div className="font-display text-xl font-semibold mt-1">{s.name}</div>
              <div className="font-mono text-xs text-black/60 mt-1">// {s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS TEASER */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/projects" title="stuff i shipped" action={{ to: '/projects', label: 'all repos' }} />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'devfolio', desc: 'this exact site, but the boring version. built w/ next.js + mdx.', tag: 'nextjs' },
            { name: 'InnerBeat', desc: 'a music-mood web app that judges your spotify taste. gently.', tag: 'react' },
            { name: 'CineVerse', desc: 'movies, tmdb api, and me pretending i understand film.', tag: 'js' },
          ].map((p) => (
            <a
              key={p.name}
              href={`https://github.com/${PROFILE.handle}/${p.name}`}
              target="_blank"
              rel="noreferrer"
              className="group block border-2 border-black bg-white p-5 sticker"
            >
              <div className="flex items-start justify-between">
                <div className="font-display text-2xl font-semibold">{p.name}</div>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
              <p className="text-sm text-black/70 mt-2 leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 font-mono text-[10px] border border-black px-2 py-0.5">#{p.tag}</span>
            </a>
          ))}
        </div>
      </section>

      {/* NOW LEARNING */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/now-learning" title="currently learning" />
        <div className="border-2 border-black bg-white">
          {NOW_LEARNING.map((n, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 border-b-2 border-black last:border-0 hover:bg-lime/30 transition-colors">
              <span className="font-mono text-xs text-black/40 w-8">0{i + 1}</span>
              <span className="font-mono text-sm">{'>'} {n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/receipts" title="unsolicited quotes" />
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border-2 border-black bg-white p-6 sticker">
              <div className="font-display text-2xl leading-snug">&ldquo;{t.quote}&rdquo;</div>
              <div className="mt-3 font-mono text-xs text-black/50">— {t.by}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <SectionHeader path="/blog" title="chaotic writings" action={{ to: '/blog', label: 'all posts' }} />
        <div className="divide-y-2 divide-black border-2 border-black bg-white">
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="flex items-center justify-between gap-4 px-5 py-5 hover:bg-lime/30 transition-colors"
            >
              <div>
                <div className="font-display text-lg md:text-xl font-semibold">{p.title}</div>
                <div className="font-mono text-xs text-black/50 mt-1">{p.date} · {p.readTime} · #{p.tag}</div>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-24">
        <div className="border-2 border-black bg-black text-paper p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-52 h-52 bg-lime rounded-full blur-3xl opacity-40" />
          <div className="relative z-10 grid md:grid-cols-[2fr_1fr] gap-6 items-end">
            <div>
              <div className="font-mono text-xs text-lime mb-3">// end of scroll</div>
              <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
                you scrolled this far. <span className="font-serifi italic">let&rsquo;s build something.</span>
              </h3>
            </div>
            <a
              href="mailto:hello@khandelwaldev.me"
              className="inline-flex items-center justify-center font-mono h-12 px-6 bg-lime text-black hover:bg-limeSoft transition-colors w-full md:w-auto"
            >
              say hi <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
