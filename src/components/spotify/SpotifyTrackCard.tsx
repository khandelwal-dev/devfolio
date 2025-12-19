import Link from "next/link";

export default function SpotifyTrackCard({ track }: any) {
  return (
    <Link
      href={track.url}
      target="_blank"
      className="group flex items-center gap-4"
    >
      <img
        src={track.image}
        className="h-12 w-12 rounded grayscale group-hover:grayscale-0 transition"
      />
      <div>
        <p className="text-sm text-neutral-200 line-clamp-1">{track.title}</p>
        <p className="text-xs text-neutral-500 line-clamp-1">{track.artist}</p>
      </div>
    </Link>
  );
}
