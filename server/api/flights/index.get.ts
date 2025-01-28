import { Flights } from "../../models";

export default defineEventHandler(async (event) => {
  console.log("Get Prev Day Flights");

  try {
    const data = await Flights.getPrev();
    if (data) {
      return {
        flights: data.flights,
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
