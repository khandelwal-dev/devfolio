import { getPlaylists } from "$dev/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getPlaylists();
  const data = await res.json();

  const playlists = data.items.map((p: any) => ({
    name: p.name,
    image: p.images[0]?.url,
    url: p.external_urls.spotify,
  }));

  return NextResponse.json(playlists);
}
