'use client';

import { useEffect, useState } from 'react';
import { Music2, Pause, Play, ExternalLink, X } from 'lucide-react';

export default function SpotifyWidget() {
  const [track, setTrack] = useState(null);
  const [open, setOpen] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchTrack = async () => {
      try {
        const res = await fetch('/api/now-playing', {
          cache: 'no-store',
        });

        if (!res.ok) return;

        const data = await res.json();

        if (mounted) {
          setTrack(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrack();

    // Refresh every 10 seconds
    const interval = setInterval(fetchTrack, 10000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!track || dismissed) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-30 w-11 h-11 border-2 border-black bg-black text-lime flex items-center justify-center sticker"
        aria-label="open now playing"
      >
        <Music2 className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-30 w-[300px] border-2 border-black bg-white sticker">
      <div className="flex items-center justify-between px-3 py-1.5 bg-black text-lime font-mono text-[10px] uppercase tracking-widest">
        <span className="flex items-center gap-1.5">
          <Music2 className="w-3 h-3" />
          {track.nowPlaying ? 'listening now' : 'last played'}
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setOpen(false)}
            className="hover:text-white"
            aria-label="minimize"
          >
            –
          </button>

          <button
            onClick={() => setDismissed(true)}
            className="hover:text-white"
            aria-label="close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      <a
        href={track.url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 p-3 group"
      >
        <div className="relative w-14 h-14 shrink-0 border border-black overflow-hidden bg-black">
          {track.image && (
            <img
              src={track.image}
              alt={track.album || track.title}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition">
            {track.nowPlaying ? (
              <Pause
                className="w-5 h-5 text-lime opacity-0 group-hover:opacity-100"
                fill="#c6ff3d"
              />
            ) : (
              <Play
                className="w-5 h-5 text-lime opacity-0 group-hover:opacity-100"
                fill="#c6ff3d"
              />
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-semibold truncate">
            {track.title}
          </div>

          <div className="font-mono text-[11px] text-black/60 truncate">
            {track.artist}
          </div>

          {track.nowPlaying ? (
            <div className="mt-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="font-mono text-[10px] uppercase">
                Listening now
              </span>
            </div>
          ) : (
            <div className="mt-1.5 font-mono text-[10px] text-black/40">
              played earlier — not live
            </div>
          )}
        </div>

        <ExternalLink className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
      </a>
    </div>
  );
}
