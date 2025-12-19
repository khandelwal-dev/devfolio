import { getTopArtists } from "$dev/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getTopArtists();
  const data = await res.json();

  const artists = data.items.map((a: any) => ({
    name: a.name,
    image: a.images[1]?.url,
    url: a.external_urls.spotify,
  }));

  return NextResponse.json(artists);
}
