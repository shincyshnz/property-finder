const jwt = require("jsonwebtoken");

const generateAccessToken = (userId)=>{
    return jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn : '1d'
       });
}

module.exports = {
    generateAccessToken,
}