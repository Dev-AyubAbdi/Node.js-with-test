import User from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";
export const register = async (req, res, next) => {
  let { name, email, password } = req.body;

  try {
    email = email.toLowerCase();

    const exist = await User.findOne({ email });

    if (exist)
      return res.status(400).json({
        message: "this email already used",
      });

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    email = email.toLowerCase();

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
     return res.status(404).json({
        message: "invalid email or password",
      });
     
    }
     const token = generateToken(user._id)

      res.status(201).json({token})
  } catch (error) {
    next(error)
  }
};
