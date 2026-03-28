const User = require("../models/User");
const jwt = require("jsonwebtoken");

//generate JWT token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//registration
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if user already exists

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User is already registered!" });
    }

    //else create from model

    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//login

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find by email
    const farmer = await User.findOne({email});
    if(!farmer){
      return res.status(400).json({message: "Invalid Credentials!"});
    }

    const isMatch = await farmer.matchPassword(password);
      if(!isMatch){
        return res.status(400).json({message: "Invalid Credentials!"});
      }

      res.status(200).json({
      _id:farmer._id,
      name: farmer.username,
      email: farmer.email,
      token: generateToken(farmer._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Login Failed! " });
  }
};
