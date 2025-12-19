import Link from "next/link";

import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  image?: string;
  songUrl?: string;
};

async function getSong(): Promise<Song> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/spotify/now-playing`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function NowPlaying() {
  const song = await getSong();

  if (!song?.title) {
    return (
      <span className="text-xs text-neutral-600">♫ not playing anything</span>
    );
  }

  return (
    <div className={`mb-9 ${oswald.className}`}>
      <Link
        href={song.songUrl!}
        target="_blank"
        className="group flex items-center gap-3 text-xs text-neutral-600 hover:text-neutral-300 transition"
      >
        {/* Album Art */}
        <img
          src={song.image}
          alt={song.title}
          className="h-[66px] w-[66px] grayscale group-hover:grayscale-0 transition duration-300"
        />

        {/* Text */}
        <div>
          <h1 className="text-sm text-white/40 tracking-widest mb-3">
            {song.isPlaying ? "listening to " : "last played "}on spotify
          </h1>
          <h1 className="text-neutral-400 text-base tracking-widest line-clamp-2">
            {song.title} — {song.artist}
          </h1>
        </div>
      </Link>
    </div>
  );
}
