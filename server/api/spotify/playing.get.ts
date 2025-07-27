import { getToken } from "../../utils/spotify/getToken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  try {
    const token = await getToken(config);

    const response = await $fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
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
