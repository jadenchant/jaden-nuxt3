export default defineEventHandler(async (event) => {
  const scope = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ].join(" ");

  const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scope,
  )}&redirect_uri=${encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI as string)}`;

  return sendRedirect(event, redirect);
});
