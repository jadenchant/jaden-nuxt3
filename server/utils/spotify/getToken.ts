import type { RuntimeConfig } from "nuxt/schema";
import { SpotifyToken } from "../../models";

export async function getToken(config: RuntimeConfig): Promise<string> {
  const data = await SpotifyToken.getToken();
  if (data?.token) {
    return data.token;
  } else {
    const response: resToken = await $fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: config.spotifyRefresh,
        }),
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${config.spotifyID}:${config.spotifySecret}`).toString(
              "base64",
            ),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    if (response.access_token) {
      const spotifyToken = new SpotifyToken({
        token: response.access_token,
      });

      await spotifyToken.save();

      return response.access_token;
    } else {
      throw new Error("Spotify Did NOT Return an Access Token");
    }
  }
}
