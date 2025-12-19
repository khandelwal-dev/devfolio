import { getTopTracks } from "$dev/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getTopTracks();
  const data = await res.json();

  const tracks = data.items.map((t: any) => ({
    title: t.name,
    artist: t.artists.map((a: any) => a.name).join(", "),
    image: t.album.images[1]?.url,
    url: t.external_urls.spotify,
  }));

  return NextResponse.json(tracks);
}
