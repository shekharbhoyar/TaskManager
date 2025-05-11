import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
export const userRoutes = Router();

userRoutes.post("/signup", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const existingUser = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ massege: "Username already exist" });
    } else if (username.length < 4) {
      return res
        .status(400)
        .json({ massege: "username should have atleast 4 charecter" });
    }
    if (existingEmail) {
      return res.status(400).json({ massege: "Email already exists" });
    }
    const hashPassword = bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({ massege: "signin successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ massege: "Internal server error" });
  }
});
