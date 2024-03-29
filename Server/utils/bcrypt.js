const bcrypt = require("bcrypt");
const salt =  10;

const generatePasswordHash = (password)=>{
    return bcrypt.hash(password, salt);
}

const comparePasswordHash = (password, passwordHash)=>{
    return bcrypt.compare(password, passwordHash);
}

module.exports = {
    generatePasswordHash,
    comparePasswordHash,
}