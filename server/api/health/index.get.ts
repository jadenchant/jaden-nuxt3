import { Distances, Flights, Steps } from "../../models";

export default defineEventHandler(async (event) => {
  console.log("Get All Prev Day Health Data");

  try {
    const distance = await Distances.getPrev();
    const flights = await Flights.getPrev();
    const steps = await Steps.getPrev();

    if (!distance) {
      throw new Error("Distance data is null or undefined");
    } else if (!flights) {
      throw new Error("Flights data is null or undefined");
    } else if (!steps) {
      throw new Error("Steps data is null or undefined");
    }

    return {
      distance: {
        distance: distance.distance,
        units: distance.units,
      },
      flights: {
        flights: flights.flights,
        units: flights.units,
      },
      steps: {
        steps: steps.steps,
        units: steps.units,
      },
    };
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
