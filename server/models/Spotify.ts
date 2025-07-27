import mongoose from "mongoose";

const spotifyTokenSchema = new mongoose.Schema(
  {
    token: {
      requiered: true,
      type: String,
    },
  },
  {
    timestamps: true,
    statics: {
      getToken() {
        return this.findOne().sort({ created_at: -1 });
      },
    },
  },
);

spotifyTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

export default mongoose.model(
  "SpotifyToken",
  spotifyTokenSchema,
  "spotify_token",
);
