import { SpotifyToken } from "~~/server/models";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string;

  if (!code) return { error: "Missing Code From Spotify" };

  const config = useRuntimeConfig(event);

  const response: any = await $fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: config.spotifyRedirectUri,
    }),
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${config.spotifyID}:${config.spotifySecret}`).toString(
          "base64",
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const spotifyToken = new SpotifyToken({
    token: response.access_token,
  });

  const spotifyTokenSave = await spotifyToken.save();

  console.log("Refresh Token:", response.refresh_token);

  return {
    message: `Tokens Retreived from Spotify and ${spotifyTokenSave ? "Saved to Database" : "NOT Saved to Database"}`,
  };
});
