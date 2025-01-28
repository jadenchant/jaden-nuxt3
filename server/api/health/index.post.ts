import { Distances, Flights, Steps } from "../../models";
import round from "../../functions/round";

export default defineEventHandler(async (event: any) => {
  console.log("POST /api/health");

  try {
    const healthAPIKey = getHeader(event, "HEALTH_API");

    if (process.env.HEALTH_API !== healthAPIKey) {
      throw new Error("INVALID API KEY");
    } else {
      const body = await readBody(event);
      const data = body.data.metrics;

      let flights, steps, distance;

      let currentDate;

      const hasData = new Map();
      hasData.set("flights", false);
      hasData.set("steps", false);
      hasData.set("distance", false);

      for (let i = 0; i < data.length; i++) {
        if (data[i].name === "flights_climbed") {
          flights = data[i];
          currentDate = flights.data[0].date;
          hasData.set("flights", true);
        } else if (data[i].name === "step_count") {
          steps = data[i];
          currentDate = steps.data[0].date;
          hasData.set("steps", true);
        } else if (data[i].name === "walking_running_distance") {
          distance = data[i];
          currentDate = distance.data[0].date;
          hasData.set("distance", true);
        }
      }

      const hasAnyData = [...hasData.values()].some(Boolean);

      if (!hasAnyData) {
        throw new Error("NO DATA POSTED");
      }

      let flightsData;

      if (hasData.get("flights")) {
        flightsData = new Flights({
          date: flights.data[0].date,
          flights: flights.data[0].qty,
          units: "flights",
        });
      } else {
        flightsData = new Flights({
          date: currentDate,
          flights: 0,
          units: "flights",
        });
      }

      let stepsData;

      if (hasData.get("steps")) {
        stepsData = new Steps({
          date: steps.data[0].date,
          steps: steps.data[0].qty,
          units: "steps",
        });
      } else {
        stepsData = new Steps({
          date: currentDate,
          steps: 0,
          units: "steps",
        });
      }

      let distanceData;

      if (hasData.get("distance")) {
        distanceData = new Distances({
          date: distance.data[0].date,
          distance: round(distance.data[0].qty),
          units: "mi",
        });
      } else {
        distanceData = new Distances({
          date: currentDate,
          distance: 0,
          units: "mi",
        });
      }

      const flightsSave = await flightsData.save();
      const stepsSave = await stepsData.save();
      const distanceSave = await distanceData.save();

      return { flights: flightsSave, steps: stepsSave, distance: distanceSave };
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
