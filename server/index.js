import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // ✅ Load env variables from .env
import cors from "cors";
import { userRoutes } from "./routes/user.js";

dotenv.config();
const app = express();

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI) //we can read .env file by using this way
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); // this is used to take inputes inside body object from http request
app.use(cors()); // this is used to allow api request from different frontend request,we can give permission to others to access this api.
//cross origin resorce sharing

app.use("/userapi", userRoutes);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
