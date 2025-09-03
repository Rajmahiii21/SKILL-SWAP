import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email.toLowerCase().endsWith("@gmail.com")) {
      return res.status(400).json({ message: "Only Gmail addresses allowed" });
    }

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });

    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ message: "User registered", user: { username, email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email.toLowerCase().endsWith("@gmail.com")) {
      return res.status(400).json({ message: "Only Gmail addresses allowed" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login success", user: { username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
