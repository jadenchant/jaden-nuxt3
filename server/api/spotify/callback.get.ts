import { SpotifyToken, SpotifyRefresh } from "~~/server/models";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string;

  if (!code) return { error: "Missing Code From Spotify" };

  const response: resToken = await $fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI as string,
      }),
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  const spotifyToken = new SpotifyToken({
    token: response.access_token,
  });

  const spotifyRefresh = new SpotifyRefresh({
    token: response.refresh_token,
  });

  const spotifyTokenSave = await spotifyToken.save();
  const spotifyRefreshSave = await spotifyRefresh.save();

  return {
    message: `Tokens Retreived from Spotify and ${spotifyTokenSave && spotifyRefreshSave ? "Saved to Database" : "NOT Saved to Database"}`,
  };
});
