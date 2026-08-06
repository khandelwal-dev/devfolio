// Talks to Spotify's Accounts + Web API using a long-lived refresh token,
// so the site can show your currently playing (or most recently played) track
// without you ever being logged in on the visitor's side.
//
// Requires SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
// in your environment — see README.md for how to generate the refresh token.

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

function basicAuthHeader() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  return Buffer.from(`${id}:${secret}`).toString('base64');
}

export function hasSpotifyCreds() {
  return Boolean(
    process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET && process.env.SPOTIFY_REFRESH_TOKEN
  );
}

// Exchanges the refresh token for a short-lived access token. Spotify access
// tokens expire in ~1hr, so we just fetch a fresh one on every request rather
// than bothering to cache it — this runs on the server, not in the browser.
export async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuthHeader()}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`spotify token refresh failed: ${res.status}`);
  }

  return res.json();
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: 'no-store',
  });
}

export async function getLastPlayed() {
  const { access_token } = await getAccessToken();
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: 'no-store',
  });
}
