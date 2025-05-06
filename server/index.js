import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // ✅ Load env variables from .env

dotenv.config();
const app = express();

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ massege: "hii" });
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
