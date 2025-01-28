import { Distances } from "../../models";

export default defineEventHandler(async (event) => {
  console.log("Get Prev Day Distance");

  try {
    const data = await Distances.getPrev();
    if (data) {
      return {
        distance: data.distance,
        units: data.units,
      };
    } else {
      throw new Error("Data is null");
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
