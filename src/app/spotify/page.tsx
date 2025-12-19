export const metadata = {
  title: "Spotify — Dev Khandelwal",
  description:
    "Explore my weekly top songs, favorite artists, and curated playlists.",
  openGraph: {
    title: "Spotify — Dev Khandelwal",
    description:
      "Explore my weekly top songs, favorite artists, and curated playlists.",
  },
  twitter: {
    title: "Spotify — Dev Khandelwal",
    description:
      "Explore my weekly top songs, favorite artists, and curated playlists.",
  },
};

import SpotifyTrackCard from "$dev/components/spotify/SpotifyTrackCard";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

async function fetcher(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function SpotifyPage() {
  const [tracks, artists, playlists] = await Promise.all([
    fetcher("/api/spotify/top-tracks"),
    fetcher("/api/spotify/top-artists"),
    fetcher("/api/spotify/playlists"),
  ]);

  return (
    <div className={oswald.className}>
      <div className="text-xs text-white/40 tracking-widest mb-6">
        ~/portfolio/spotify
      </div>
      <div className="space-y-16 tracking-widest">
        <section>
          <h1 className="mb-6 text-lg text-neutral-300">
            Top tracks — last week
          </h1>
          <div className="space-y-4">
            {tracks.map((t: any, i: number) => (
              <SpotifyTrackCard key={i} track={t} />
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-6 text-lg text-neutral-300">
            Top artists — last week
          </h1>
          <div className="flex gap-8 flex-wrap">
            {artists.map((a: any, i: number) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                className="group w-[120px]"
              >
                <img
                  src={a.image}
                  className="rounded-full grayscale group-hover:grayscale-0 transition w-[120px] h-[120px]"
                />
                <p className="mt-2 text-sm mx-auto w-fit">{a.name}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-6 text-lg text-neutral-300">My playlists</h1>
          <div className="flex gap-8 flex-wrap">
            {playlists.map((p: any, i: number) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                className="group w-[120px]"
              >
                <img
                  src={p.image}
                  className="rounded grayscale group-hover:grayscale-0 transition w-[120px] h-[120px]"
                />
                <p className="mt-2 text-sm">{p.name}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
