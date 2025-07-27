import mongoose from "mongoose";

const spotifyRefreshSchema = new mongoose.Schema(
  {
    token: {
      requiered: true,
      type: String,
    },
  },
  {
    timestamps: true,
    statics: {
      getRefresh() {
        return this.findOne().sort({ created_at: -1 });
      },
    },
  },
);

export default mongoose.model(
  "SpotifyRefresh",
  spotifyRefreshSchema,
  "spotify_refresh",
);
