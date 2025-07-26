import mongoose from "mongoose";

const distanceSchema = new mongoose.Schema(
  {
    date: {
      required: true,
      type: Date,
    },
    distance: {
      requiered: true,
      type: Number,
    },
    units: {
      required: true,
      type: String,
    },
  },
  {
    statics: {
      getPrev() {
        const last = new Date();
        last.setDate(last.getDate() - 3);
        const now = new Date();
        return this.findOne({
          date: {
            $gt: last,
            $lt: now,
          },
        }).sort({ date: -1 });
      },
      getPrev30() {
        const last = new Date();
        last.setDate(last.getDate() - 30);
        const now = new Date();

        return this.aggregate([
          {
            $match: {
              date: {
                $gt: last,
                $lt: now,
              },
            },
          },
          {
            $group: {
              _id: {
                year: { $year: "$date" },
                month: { $month: "$date" },
                day: { $dayOfMonth: "$date" },
              },
              data: { $first: "$$ROOT" },
            },
          },
          {
            $sort: {
              "_id.year": 1,
              "_id.month": 1,
              "_id.day": 1,
            },
          },
          {
            $replaceRoot: { newRoot: "$data" },
          },
        ]);
      },
    },
  },
);

export default mongoose.model("Distances", distanceSchema, "distances");
