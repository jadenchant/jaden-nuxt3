export default defineEventHandler(async (event) => {
  try {
    const spotifyAPIKey = getHeader(event, "SPOTIFY_API");

    if (process.env.SPOTIFY_API !== spotifyAPIKey) {
      throw new Error("INVALID SPOTIFY API KEY");
    } else {
      const scope = [
        "user-read-currently-playing",
        "user-read-playback-state",
      ].join(" ");

      const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
        scope,
      )}&redirect_uri=${encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI as string)}`;

      return sendRedirect(event, redirect);
    }
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: "500",
      message: "SERVER ERROR",
      details: error,
    };
  }
});
