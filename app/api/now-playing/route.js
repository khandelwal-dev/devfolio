import { NextResponse } from 'next/server';
import { getNowPlaying, getLastPlayed, hasSpotifyCreds } from '../../../lib/spotify';
import { DEMO_TRACK } from '../../../data/mock';

// Shape returned to the widget, always:
// { title, artist, album_art, url, progress_ms, duration_ms, is_playing, is_demo }
//
// No Spotify creds set (yet)? Falls back to the demo track so the widget
// still has something to render locally / in preview deploys.
export async function GET() {
  if (!hasSpotifyCreds()) {
    return NextResponse.json(DEMO_TRACK);
  }

  try {
    // 1. currently playing
    const nowRes = await getNowPlaying();
    if (nowRes.status === 200) {
      const song = await nowRes.json();
      if (song?.is_playing && song.item) {
        return NextResponse.json({
          is_playing: true,
          is_demo: false,
          title: song.item.name,
          artist: song.item.artists.map((a) => a.name).join(', '),
          album: song.item.album?.name,
          album_art: song.item.album?.images?.[0]?.url || song.item.album?.images?.[1]?.url || null,
          url: song.item.external_urls?.spotify,
          progress_ms: song.progress_ms || 0,
          duration_ms: song.item.duration_ms || 0,
        });
      }
    }

    // 2. nothing playing right now -> most recently played
    const lastRes = await getLastPlayed();
    if (lastRes.status === 200) {
      const data = await lastRes.json();
      const track = data.items?.[0]?.track;
      if (track) {
        return NextResponse.json({
          is_playing: false,
          is_demo: false,
          title: track.name,
          artist: track.artists.map((a) => a.name).join(', '),
          album: track.album?.name,
          album_art: track.album?.images?.[0]?.url || track.album?.images?.[1]?.url || null,
          url: track.external_urls?.spotify,
          progress_ms: 0,
          duration_ms: track.duration_ms || 0,
        });
      }
    }
  } catch (e) {
    // token refresh failed, spotify down, whatever — fail soft to demo
    console.error('spotify now-playing error:', e.message);
  }

  return NextResponse.json(DEMO_TRACK);
}