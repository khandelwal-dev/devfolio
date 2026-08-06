'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import { BLOG_POSTS } from '../../data/blogPosts';

const TAGS = ['all', 'ai', 'react', 'css', 'life', 'devlog'];

export default function Blog() {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState('all');

  const filtered = BLOG_POSTS.filter(
    (p) => (tag === 'all' || p.tag === tag) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
      <section className="pt-4">
        <div className="font-mono text-xs text-black/50 mb-4">/blog — thoughts, mostly bad ones</div>
        <h1 className="font-display font-semibold tracking-tighter text-5xl md:text-7xl leading-[0.95]">
          blog. <span className="font-serifi italic">or:</span> <br />
          <span className="underline decoration-4 underline-offset-4">my group chat</span>, but public.
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl">devlogs, hot takes, and the occasional 2am epiphany. read at your own risk.</p>
      </section>

      <section className="mt-10 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search posts..."
            className="font-mono border-2 border-black rounded-none h-11 bg-white pl-9 w-full focus:outline-none focus:bg-lime/10"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`font-mono text-xs h-11 px-4 border-2 border-black transition-colors ${tag === t ? 'bg-black text-lime' : 'bg-white hover:bg-black hover:text-lime'}`}
            >
              #{t}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader path="/posts" title="latest yaps" />
        <div className="border-2 border-black bg-white divide-y-2 divide-black">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block px-5 md:px-6 py-6 hover:bg-lime/25 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-2xl md:text-3xl font-semibold leading-snug">{p.title}</div>
                  <p className="mt-2 text-black/70 max-w-2xl leading-relaxed">{p.excerpt}</p>
                  <div className="mt-3 font-mono text-xs text-black/50 flex items-center gap-3">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime} read</span>
                    <span>·</span>
                    <span className="bg-black text-lime px-1.5 py-0.5">#{p.tag}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 shrink-0 opacity-30 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
          {filtered.length === 0 && <div className="px-6 py-10 font-mono text-sm text-black/60">no posts here. maybe i haven&rsquo;t had my coffee yet.</div>}
        </div>
      </section>

      {/* newsletter */}
      <section className="mt-16">
        <div className="border-2 border-black bg-black text-paper p-8 md:p-10">
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-end">
            <div>
              <div className="font-mono text-xs text-lime">// no-spam guarantee, mostly</div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mt-2">get my chaos in your inbox.</h3>
              <p className="text-white/70 mt-2 max-w-lg">one email a month. sometimes zero. never two. i&rsquo;m not that guy.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('u are in. probably. this is a demo.');
              }}
              className="flex gap-2"
            >
              <input type="email" required placeholder="you@vibes.com" className="flex-1 h-11 px-3 font-mono text-sm bg-white text-black rounded-none border-2 border-lime" />
              <button className="h-11 px-5 bg-lime text-black font-mono text-sm hover:bg-limeSoft">subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
