import { getToken } from "../../utils/spotify/getToken";

export default defineEventHandler(async (event) => {
  try {
    const token = await getToken();
    let response;

    if (token) {
      const response_current: any = await $fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response_current) {
        const response_recent: any = await $fetch(
          "https://api.spotify.com/v1/me/player/recently-played",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            query: {
              limit: 1,
            },
          },
        );

        response = response_recent.items[0]?.track;

        response.type = "recent";

        return response;
      } else {
        response = response_current.item;

        response.progress_ms = response_current.progress_ms;

        response.type = "current";

        return response;
      }
    } else {
      throw new Error("Did NOT Receive Active Token");
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
