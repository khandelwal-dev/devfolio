const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const TOP_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term";

const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=short_term";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists?limit=10";

const basicAuth = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });

  return res.json();
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
}

export async function getLastPlayed() {
  const { access_token } = await getAccessToken();
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
}

export async function getTopTracks() {
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
}

export async function getTopArtists() {
  const { access_token } = await getAccessToken();
  return fetch(TOP_ARTISTS_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
}

export async function getPlaylists() {
  const { access_token } = await getAccessToken();
  return fetch(PLAYLISTS_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
}
