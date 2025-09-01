import { getToken } from "../../utils/spotify/getToken";

export default defineEventHandler(async (event) => {
  try {
    const token = await getToken();

    if (token) {
      const response_current = await $fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response_current) {
        const response_recent = await $fetch(
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

        return response_recent;
      } else {
        return response_current;
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
