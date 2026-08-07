'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Github, Twitter, Linkedin, Mail, Menu, X } from 'lucide-react';
import SpotifyWidget from './SpotifyWidget';

const NAV = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/blog', label: 'blog' },
  { to: '/uses', label: 'uses' },
];

const pathLabel = (p) => {
  if (p === '/') return 'home';
  const clean = p.replace(/^\//, '');
  return clean || 'home';
};

export default function Shell({ children }) {
  const pathname = usePathname();
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }));
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen relative">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm group shrink-0">
            <div className="relative w-7 h-7 bg-black flex items-center justify-center">
              <Terminal className="w-4 h-4 text-lime" strokeWidth={2.5} />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-lime rounded-full" />
            </div>
            <span className="font-semibold tracking-tight">khandelwaldev.me</span>
            <span className="hidden sm:inline text-black/40">— not the boring kind</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
            {NAV.map((n) => {
              const active = n.to === '/' ? pathname === '/' : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={`px-3 py-1.5 transition-colors ${active ? 'bg-black text-lime' : 'hover:bg-black/5'}`}
                >
                  /{n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-black/60">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              online
            </span>
            <span>IST {time}</span>
          </div>

          <button aria-label="menu" className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/10 bg-paper">
            <nav className="px-5 py-4 flex flex-col gap-1 font-mono text-sm">
              {NAV.map((n) => (
                <Link key={n.to} href={n.to} className="px-3 py-2 hover:bg-black/5">
                  /{n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-2">
        <div className="font-mono text-xs text-black/50 flex items-center gap-2">
          <span className="text-emerald-700">dev@portfolio</span>
          <span>:</span>
          <span className="text-black/70">~/portfolio/{pathLabel(pathname)}</span>
          <span className="text-black/40">$</span>
          <span className="cursor-blink" />
        </div>
      </div>

      <main className="relative z-10">{children}</main>

      <Footer />
      <SpotifyWidget />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-paper2">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl font-semibold">let&rsquo;s cook something.</div>
            <p className="text-sm text-black/60 mt-2">open to internships, freelance, or just yapping about ai.</p>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="mailto:hello@dev-khandelwal@outlook.com"
                className="inline-flex items-center font-mono text-xs h-10 px-4 border border-black hover:bg-black hover:text-lime transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" /> email me
              </a>
            </div>
          </div>
          <div className="font-mono text-xs">
            <div className="text-black/40 mb-2">// sitemap</div>
            <ul className="space-y-1.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link href={n.to} className="link-swoosh">/{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-mono text-xs">
            <div className="text-black/40 mb-2">// elsewhere</div>
            <ul className="space-y-1.5">
              <li>
                <a href="https://github.com/khandelwal-dev" target="_blank" rel="noreferrer" className="link-swoosh inline-flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" /> github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kkndev" target="_blank" rel="noreferrer" className="link-swoosh inline-flex items-center gap-1.5">
                  <Twitter className="w-3.5 h-3.5" /> twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/devkhandelwal" target="_blank" rel="noreferrer" className="link-swoosh inline-flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" /> linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 font-mono text-xs text-black/50">
          <div>&copy; {new Date().getFullYear()} dev khandelwal — hand-coded, over-caffeinated.</div>
          <div>built with next.js, tailwind &amp; spite.</div>
        </div>
      </div>
    </footer>
  );
}
