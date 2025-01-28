import { Steps } from "../../models";

export default defineEventHandler(async (event) => {
  console.log("Get 30Steps");

  try {
    const data = await Steps.getPrev30();
    if (data) {
      return data.map((stp) => ({
        date: stp.date,
        steps: stp.steps,
        units: stp.units,
      }));
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
