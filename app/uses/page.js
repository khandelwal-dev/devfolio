import SectionHeader from '../../components/SectionHeader';
import { USES, PHILOSOPHY } from '../../data/mock';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Uses — Dev Khandelwal',
  description: 'The software, hardware, and questionable habits that keep this operation running.',
};

export default function Uses() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
      <section className="pt-4">
        <div className="font-mono text-xs text-black/50 mb-4">/uses — the tools, the crimes</div>
        <h1 className="font-display font-semibold tracking-tighter text-5xl md:text-7xl leading-[0.95]">
          my <span className="font-serifi italic">setup.</span> <br />
          <span className="underline decoration-4 underline-offset-4">judgment</span> welcome.
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl">the software, hardware, and questionable habits that keep this operation running.</p>
      </section>

      <section className="mt-14 grid md:grid-cols-2 gap-4">
        {USES.map((u) => (
          <div key={u.category} className="border-2 border-black bg-white p-6 sticker">
            <div className="font-mono text-xs text-black/40">// {u.category}</div>
            <ul className="mt-3 space-y-2">
              {u.items.map((it) => (
                <li key={it} className="flex items-start gap-2 font-mono text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-emerald-700 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <SectionHeader path="/philosophy" title="tools don't matter. taste does." />
        <div className="grid md:grid-cols-3 gap-4 font-mono text-sm">
          {PHILOSOPHY.map((t, i) => (
            <div key={i} className="border-2 border-black bg-white p-4 sticker">
              <span className="text-black/40">#{String(i + 1).padStart(2, '0')}</span>
              <div className="mt-1">{t}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
