import { Distances } from "../../models";

export default defineEventHandler(async (event) => {
  console.log("Get 30Distance");

  try {
    const data = await Distances.getPrev30();
    if (data) {
      return data.map((dist) => ({
        date: dist.date,
        distance: dist.distance,
        units: dist.units,
      }));
    } else {
      throw new Error("Data is null");
    }
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: "Error",
      message: "Server Error",
    };
  }
});
