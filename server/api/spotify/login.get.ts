export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const scope = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ].join(" ");

  console.log("config.spotifyID: " + config.spotifyID);

  const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${config.spotifyID}&scope=${encodeURIComponent(
    scope,
  )}&redirect_uri=${encodeURIComponent(config.spotifyRedirectUri)}`;

  return sendRedirect(event, redirect);
});
