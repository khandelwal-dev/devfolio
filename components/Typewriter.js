'use client';

import { useEffect, useState } from 'react';
import { HERO_TYPES } from '../data/mock';

export default function Typewriter({ speed = 55, pause = 1500 }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = HERO_TYPES[idx];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % HERO_TYPES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, speed, pause]);

  return (
    <span className="font-mono text-base md:text-lg text-black/70">
      {text}
      <span className="inline-block w-2 h-5 md:h-6 bg-black ml-1 align-middle animate-pulse" />
    </span>
  );
}
