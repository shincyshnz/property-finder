const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        trim : true,
        required : [true, "First name is required"]
    },
    lastName : {
        type : String,
        trim : true,
        default:""
    },
    email : {
        type : String,
        trim : true,
        unique : true,
        required : [true, "Email is required"],
    },
    password : {
        type : String,
        trim : true,
        required : [true, "Password is required"],
    },
    role : {
        type : String,
        enum : [ 'user', 'admin'],
        default : 'user'
    },
    favorites : [{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "PropertyModel",
        default : [],
    }],

}, {timestamps : true} , {strict  : true});

module.exports = {
    UserModel : mongoose.model("Users", userSchema)
};