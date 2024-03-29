const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");

// Register User
const register = async (req, res, next) => {
    const {firstName, lastName, email, password, role} = req.body;
    
    try {
       const hashedPassword = await generatePasswordHash(password);
       const newUser = await UserModel.create({
        firstName, lastName, email, password:hashedPassword, role
       });

       if(newUser){
        res.status(200).json({
            message: 'Registration Successful'
           });
       }
    } catch (error) {
        next(error);
    }
}

// Login user
const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
       const user = await UserModel.findOne({email});

       if(!user) {
        res.status(401).json({
            message : "User not found. Please Register"
        }); 
       }

       const passwordMatch = await comparePasswordHash(password, user.password);
       
       if(!passwordMatch) {
        res.status(401).json({
            message : "Incorrect email/passsword"
        }); 
       }

       // Generate JWT Token
       const token = jwt.sign({userId : user._id}, process.env.SECRET_KEY, {
        expiresIn : '1h'
       });
       res.status(200).json({ token });

    } catch (error) {
        next(error);
    }
}

// const testCheckAuth = (req,res) =>{
//     console.log(req.user);
//     res.status(200).json({
//         message : "hjdgsfjsf"
//     })
// }

module.exports = {
    register,
    login,
    // testCheckAuth,
}