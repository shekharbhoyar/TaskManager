import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
export const userRoutes = Router();

userRoutes.post("/signup", async (req, res) => {//sign up route created
  try {
    const { username } = req.body;//whichever request we sent is get stored in req object and we can use it like this
    const { email } = req.body;
    const existingUser = await User.findOne({ username: username });// first we check whether user exist or not
    const existingEmail = await User.findOne({ email: email });
    if (existingUser) {// here we applied a condition to check whether user exist or not
      return res.status(400).json({ massege: "Username already exist" });
    } else if (username.length < 4) {
      return res
        .status(400)
        .json({ massege: "username should have atleast 4 charecter" });
    }
    if (existingEmail) {
      return res.status(400).json({ massege: "Email already exists" });
    }
    const hashPassword = bcrypt.hash(req.body.password, 10); // we have encrypted the password
    const newUser = new User({//if user doesnt exist we create new user
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();//saved new user
    return res.status(200).json({ massege: "signin successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ massege: "Internal server error" });
  }
});
