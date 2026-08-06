import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-32">
      <div className="font-mono text-xs text-black/50 mb-4">/404 — lost in the sauce</div>
      <h1 className="font-display font-semibold tracking-tighter text-7xl md:text-9xl leading-[0.9]">
        404. <br />
        <span className="font-serifi italic text-black/80">skill issue.</span>
      </h1>
      <p className="mt-6 max-w-lg text-black/70">this page doesn&rsquo;t exist. or maybe it does, in another timeline where i finished it.</p>
      <div className="mt-8">
        <Link href="/" className="inline-flex items-center font-mono h-11 px-5 bg-black text-lime hover:bg-black/90 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> back to home
        </Link>
      </div>
    </div>
  );
}
