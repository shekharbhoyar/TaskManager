import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // ✅ Load env variables from .env
import cors from "cors";
import { userRoutes } from "./routes/user.js";

dotenv.config();
const app = express();

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cors());

app.use("/userapi", userRoutes);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
