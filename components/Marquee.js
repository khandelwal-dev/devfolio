import { Star } from 'lucide-react';
import { STACK_MARQUEE } from '../data/mock';

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y-2 border-black bg-black text-paper py-3 -rotate-1 -mx-2">
      <div className="flex marquee-track whitespace-nowrap">
        {[...STACK_MARQUEE, ...STACK_MARQUEE].map((s, i) => (
          <span key={i} className="flex items-center gap-3 px-6 font-mono text-sm uppercase tracking-widest">
            <Star className="w-3 h-3 text-lime" fill="#c6ff3d" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
