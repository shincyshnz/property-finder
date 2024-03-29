const mongoose = require("mongoose");
const { PropertyModel } = require("../models/propertyModel");
const { UserModel } = require("../models/userModel");

const addFavorites = async (req, res, next) =>{
    const { id : propertyId } = req.query;
    const userId = req.user._id;

    if(!propertyId){
        res.status(400).json({
            message : "Something went wrong!"
        });
    }

    try {
        await UserModel.findByIdAndUpdate(userId, {$addToSet : {'favorites' : propertyId}});
        res.status(400).json({
            message : "Property added to your favorites."
        });
    } catch (error) {
        next(error);
    }
};

const searchProperties = async(req, res, next) => {
    const { search : searchString } = req.query;

    try {
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addFavorites,
}