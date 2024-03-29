const mongoose = require("mongoose");

const propertyTypesSchema = new mongoose.Schema({
    typeName : {
        type : String,
        trim : true,
    }
}, {timestamps : true} );

module.exports = {
    PropertyTypesModel : mongoose.model("PropertyTypes", propertyTypesSchema)
};