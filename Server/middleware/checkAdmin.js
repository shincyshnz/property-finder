const jwt = require("jsonwebtoken");
const {userModel, UserModel} = require("../models/userModel");

const checkAdmin = (req, res, next)=>{
    if(req.user.role !== 'admin'){
        return res.status(401).json({
            message : "UnAuthorized access"
        });
    }

    next();
};

module.exports = {checkAdmin};