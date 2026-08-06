import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({ path, title, action }) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4">
      <div>
        <div className="font-mono text-xs text-black/50 mb-2">{path}</div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      </div>
      {action && (
        <Link href={action.to} className="font-mono text-sm inline-flex items-center gap-1 link-swoosh whitespace-nowrap">
          {action.label} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
