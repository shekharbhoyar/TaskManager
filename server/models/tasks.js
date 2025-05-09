import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    important: {
      type: boolean,
      default: false,
    },
    complete: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tasks", taskSchema);
