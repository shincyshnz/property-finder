const mongoose = require("mongoose");

const amenitiesSchema = new mongoose.Schema({
    amenityName : {
        type : String,
        trim : true,
    }
}, {timestamps : true} );

module.exports = {
    AmenitiesModel : mongoose.model("Amenities", amenitiesSchema),
};