const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
const {
  generatePasswordHash,
  comparePasswordHash,
} = require("../utils/bcrypt");
const { generateAccessToken } = require("../utils/jwt");

// Register User
const register = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if(!regex.test(email)){
        throw new Error("Invalid Email address");
    }

    const isEmailExists = await UserModel.findOne({email});
    if(isEmailExists) {
        throw new Error("Email Already exists. Please Login.")
    }

    const hashedPassword = await generatePasswordHash(password);
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      res.status(200).json({
        message: "Registration Successful",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Login user
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(401).json({
        message: "User not found. Please Register",
      });
    }

    const passwordMatch = await comparePasswordHash(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({
        message: "Incorrect email/passsword",
      });
    }

    // Generate JWT Token
    const token = generateAccessToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
