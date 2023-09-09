import mongoose from "mongoose";

let queSchema = new mongoose.Schema({
  owner: String,
  email: String,
  que1: String,
  que2: String,
  que3: String,
  que4: String,
  submitedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  date: {
    type: String,
    default: new Date().toUTCString().slice(5, 16),
    required: true,
  },
});

export const QueModel = mongoose.model("questions1", queSchema);
