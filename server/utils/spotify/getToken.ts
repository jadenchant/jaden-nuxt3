import { SpotifyRefresh, SpotifyToken } from "../../models";

export async function getToken(): Promise<string> {
  const tokenData = await SpotifyToken.getToken();
  if (tokenData?.token) {
    return tokenData.token;
  } else {
    const refreshData = await SpotifyRefresh.getRefresh();

    if (refreshData?.token) {
      const response: resToken = await $fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshData.token,
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

      if (response.access_token) {
        const spotifyToken = new SpotifyToken({
          token: response.access_token,
        });

        await spotifyToken.save();

        return response.access_token;
      } else {
        throw new Error("Spotify Did NOT Return an Access Token");
      }
    } else {
      throw new Error("Need to Re-Auth");
    }
  }
}
