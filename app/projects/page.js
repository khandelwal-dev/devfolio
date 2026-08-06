'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Loader2, RefreshCw } from 'lucide-react';
import { PROFILE } from '../../data/mock';

const FALLBACK = [
  { id: 1, name: 'devfolio', description: 'personal portfolio built with next.js, tailwind, and mdx', html_url: 'https://github.com/khandelwal-dev/devfolio', homepage: 'https://khandelwaldev.me/', language: 'TypeScript', stargazers_count: 2, forks_count: 0, topics: ['nextjs', 'mdx', 'portfolio'], updated_at: '2026-06-01' },
  { id: 2, name: 'InnerBeat-Web', description: 'music mood web app', html_url: 'https://github.com/khandelwal-dev/InnerBeat-Web', homepage: 'https://innerbeat.vercel.app/', language: 'JavaScript', stargazers_count: 0, forks_count: 0, topics: ['music', 'spotify'], updated_at: '2026-05-01' },
  { id: 3, name: 'CineVerse', description: 'movies powered by tmdb api', html_url: 'https://github.com/khandelwal-dev/CineVerse', homepage: 'https://cineverse-one-chi.vercel.app/', language: 'JavaScript', stargazers_count: 0, forks_count: 0, topics: ['tmdb', 'movies'], updated_at: '2026-04-01' },
];

const LANG_COLORS = {
  TypeScript: '#3178c6', JavaScript: '#f7df1e', Python: '#3776ab', HTML: '#e34c26', CSS: '#563d7c',
  Kotlin: '#a97bff', Dart: '#00b4ab', 'C++': '#f34b7d', Shell: '#89e051', Java: '#b07219',
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('updated'); // updated | stars | name

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${PROFILE.handle}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error('gh api err');
      const data = await res.json();
      setRepos(data.filter((r) => !r.fork));
    } catch (e) {
      setError('github api rate-limited me. showing cached vibes.');
      setRepos(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = repos
    .filter((r) => r.name.toLowerCase().includes(q.toLowerCase()) || (r.description || '').toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'stars') return (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (sort === 'name') return a.name.localeCompare(b.name);
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
      <section className="pt-4">
        <div className="font-mono text-xs text-black/50 mb-4">/projects — live from github, warts and all</div>
        <h1 className="font-display font-semibold tracking-tighter text-5xl md:text-7xl leading-[0.95]">
          projects. <span className="font-serifi italic">or:</span> <br />
          <span className="underline decoration-4 underline-offset-4">public evidence</span> of my brainrot.
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl">pulled straight from github via api. some are cracked. some are cursed. all are mine.</p>
      </section>

      <section className="mt-10 flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex-1">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search a repo, tag, or a decision i regret..."
            className="font-mono border-2 border-black rounded-none h-11 bg-white w-full px-3 focus:outline-none focus:bg-lime/10"
          />
        </div>
        <div className="flex items-center gap-2">
          {[
            { k: 'updated', l: 'recent' },
            { k: 'stars', l: 'stars' },
            { k: 'name', l: 'a–z' },
          ].map((o) => (
            <button
              key={o.k}
              onClick={() => setSort(o.k)}
              className={`font-mono text-xs h-11 px-4 border-2 border-black transition-colors ${sort === o.k ? 'bg-black text-lime' : 'bg-white hover:bg-black hover:text-lime'}`}
            >
              sort: {o.l}
            </button>
          ))}
          <button
            onClick={fetchRepos}
            aria-label="refresh"
            className="font-mono h-11 w-11 flex items-center justify-center border-2 border-black hover:bg-black hover:text-lime transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </section>

      {error && <div className="mt-4 font-mono text-xs bg-yellow-100 border-2 border-black px-3 py-2">{error}</div>}

      <section className="mt-8">
        {loading ? (
          <div className="flex items-center gap-2 font-mono text-sm text-black/60 py-10">
            <Loader2 className="w-4 h-4 animate-spin" /> fetching brain dumps from github...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((r) => (
              <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="group border-2 border-black bg-white p-5 sticker block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-2xl font-semibold group-hover:underline underline-offset-4">{r.name}</div>
                    <p className="text-sm text-black/70 mt-1 leading-relaxed min-h-[2.5rem]">
                      {r.description || <span className="italic text-black/40">no description. mystery repo.</span>}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-60">
                    <Github className="w-4 h-4" />
                    {r.homepage && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(r.homepage, '_blank');
                        }}
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 font-mono text-xs text-black/60">
                  {r.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: LANG_COLORS[r.language] || '#888' }} />
                      {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {r.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {r.forks_count}
                  </span>
                  <span className="ml-auto">{new Date(r.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
                {r.topics && r.topics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.topics.slice(0, 5).map((t) => (
                      <span key={t} className="font-mono text-[10px] border border-black px-1.5 py-0.5">#{t}</span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
        {!loading && filtered.length === 0 && (
          <div className="font-mono text-sm text-black/60 py-10">no repos matched. try being less specific, like my life plans.</div>
        )}
      </section>
    </div>
  );
}
