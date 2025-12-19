import { getNowPlaying, getLastPlayed } from "$dev/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const nowRes = await getNowPlaying();

  if (nowRes.status === 200) {
    const song = await nowRes.json();

    if (song?.is_playing) {
      return NextResponse.json({
        isPlaying: true,
        title: song.item.name,
        artist: song.item.artists.map((a: any) => a.name).join(", "),
        image: song.item.album.images[2]?.url,
        songUrl: song.item.external_urls.spotify,
      });
    }
  }

  const lastRes = await getLastPlayed();
  if (lastRes.status === 200) {
    const data = await lastRes.json();
    const track = data.items?.[0]?.track;

    if (track) {
      return NextResponse.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((a: any) => a.name).join(", "),
        image: track.album.images[2]?.url,
        songUrl: track.external_urls.spotify,
      });
    }
  }

  return NextResponse.json({ isPlaying: false });
}
