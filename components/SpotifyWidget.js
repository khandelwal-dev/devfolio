'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, ExternalLink, X } from 'lucide-react';

export default function SpotifyWidget() {
  const [track, setTrack] = useState(null);
  const [liveProgress, setLiveProgress] = useState(0);
  const [open, setOpen] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const trackKeyRef = useRef(null); // title+artist, so we don't reset the tick on every poll

  // poll the API every 30s for the real state (playing/paused, track changed, etc)
  useEffect(() => {
    let mounted = true;
    const fetchIt = async () => {
      try {
        const r = await fetch('/api/now-playing');
        const data = await r.json();
        if (!mounted) return;

        const key = `${data.title}::${data.artist}`;
        // only snap progress back to the server value on a genuinely new track —
        // otherwise a slightly-stale poll would make the bar jump backwards
        if (key !== trackKeyRef.current) {
          trackKeyRef.current = key;
          setLiveProgress(data.progress_ms || 0);
        }
        setTrack(data);
      } catch (e) {
        /* ignore, keep showing the last known track */
      }
    };
    fetchIt();
    const i = setInterval(fetchIt, 30000);
    return () => {
      mounted = false;
      clearInterval(i);
    };
  }, []);

  // tick the progress bar forward every second between polls, so it feels live
  useEffect(() => {
    if (!track?.is_playing) return;
    const t = setInterval(() => {
      setLiveProgress((p) => Math.min(track.duration_ms || 0, p + 1000));
    }, 1000);
    return () => clearInterval(t);
  }, [track?.is_playing, track?.duration_ms]);

  if (!track || dismissed) return null;

  const pct = track.is_playing && track.duration_ms ? Math.min(100, (liveProgress / track.duration_ms) * 100) : 0;

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
          {track.is_demo ? 'demo track' : track.is_playing ? 'now playing' : 'last played'}
        </span>
        <div className="flex items-center gap-1">
          <button onClick={() => setOpen(false)} className="hover:text-white" aria-label="minimize">–</button>
          <button onClick={() => setDismissed(true)} className="hover:text-white" aria-label="close">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
      <a href={track.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 group">
        <div className="relative w-14 h-14 shrink-0 border border-black overflow-hidden bg-black">
          {track.album_art && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={track.album_art} alt={track.album || track.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition">
            {track.is_playing ? (
              <Play className="w-5 h-5 text-lime opacity-0 group-hover:opacity-100" fill="#c6ff3d" />
            ) : (
              <Pause className="w-5 h-5 text-lime opacity-0 group-hover:opacity-100" fill="#c6ff3d" />
            )}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-semibold truncate">{track.title}</div>
          <div className="font-mono text-[11px] text-black/60 truncate">{track.artist}</div>
          {track.is_playing ? (
            <div className="mt-1.5 h-1 bg-black/10 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-lime" style={{ width: `${pct}%`, transition: 'width 1s linear' }} />
            </div>
          ) : (
            <div className="mt-1.5 font-mono text-[10px] text-black/40">played earlier — not live</div>
          )}
        </div>
        <ExternalLink className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
      </a>
    </div>
  );
}
