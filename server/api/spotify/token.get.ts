import { SpotifyToken } from "~~/server/models";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  try {
    const data = await SpotifyToken.getToken();
    if (data) {
      return {
        token: data.token,
      };
    } else {
      const response: any = await $fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: config.spotifyRefresh,
            client_id: config.spotifyID,
          }),
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `${config.spotifyID}:${config.spotifySecret}`,
              ).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      if (response.access_token) {
        const spotifyToken = new SpotifyToken({
          token: response.access_token,
        });

        const spotifyTokenSave = await spotifyToken.save();

        return { token: response.access_token };
      } else {
        throw new Error("Spotify Did NOT Return an Access Token");
      }
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
