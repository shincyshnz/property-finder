const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    description : {
        type : String,
        trim : true,
    },
    propertyType : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PropertyTypes",
    },
    size : {
        type : Number,
    },
    beds : {
        type : Number,
        default : 0,
    }, 
    bathrooms : {
        type:Number,
        default : 0,
    },
    serviceCharges : {
        type : Number,
        default : 0,
    },
    availableFrom : {
        type : Date,
        default : Date.now,
    },
    location : {
        type : String,
    },
    amenities : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Amenities",
    }],
    images : [{
        type : String, 
    }],
    price :{
        type : Number,
    },
    completeionStatus : {
        type : String,
        trim : true,
    },
    propertyTag : {
        type : String,
        enum : ['rent', 'buy', 'new project', 'commercial'],
    }
}, {timestamps : true} );

module.exports = {
    PropertyModel : mongoose.model("Properties", propertySchema),
};