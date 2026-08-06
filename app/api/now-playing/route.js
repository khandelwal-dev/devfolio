import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.LASTFM_USERNAME;
    const apiKey = process.env.LASTFM_API_KEY;

    if (!username || !apiKey) {
      return NextResponse.json(
        { error: "Missing Last.fm environment variables." },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`,
      {
        next: {
          revalidate: 10,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Last.fm." },
        { status: res.status }
      );
    }

    const data = await res.json();

    const track = data?.recenttracks?.track;

    // Nothing currently playing
    if (!track || (Array.isArray(track) && track.length === 0)) {
      return NextResponse.json({
        nowPlaying: false,
      });
    }

    // Last.fm returns an object when playing
    const song = Array.isArray(track) ? track[0] : track;

    const image =
      song.image?.find((img) => img.size === "extralarge")?.["#text"] ||
      song.image?.[song.image.length - 1]?.["#text"] ||
      "";

    return NextResponse.json({
      nowPlaying: song["@attr"]?.nowplaying === "true",
      title: song.name,
      artist: song.artist?.["#text"] || "",
      album: song.album?.["#text"] || "",
      image,
      url: song.url,
    });
  } catch (error) {
    console.error("Last.fm API Error:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
