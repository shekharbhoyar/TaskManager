import { Router } from "express";
import tasks from "../models/tasks";
const tasksroutes = Router();

tasksroutes.post("/create-tasks", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(400).json({ massege: "internal server error" });
  }
});
