import "dotenv/config";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export default async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || "";
    mongoose.connect(mongoUrl);
    console.log("JADEN-NUXT connection established.");
  } catch (err) {
    console.error("JADEN-NUXT connection failed.", err);
  }
};
