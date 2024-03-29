const { AmenitiesModel } = require("../models/amenitiesModel");
const { PropertyTypesModel } = require("../models/propertyTypesModel");

// ------------------ Handling Property types -------------------
const createPropertyTypes = async (req, res, next)=>{
    const { propertyType } = req.body;

    try {
        const newType = await PropertyTypesModel.create({typeName : propertyType});
        res.status(200).json({
            message : "Property type created successfully."
        });
    } catch (error) {
        next(error);
    }
};

// ------------------ Handling Amenities -------------------
const createAmenities = async (req, res, next)=>{
    const { amenityName } = req.body;

    try {
        const newType = await AmenitiesModel.create({amenityName});
        res.status(200).json({
            message : "Amenity created successfully."
        });
    } catch (error) {
        next(error);
    }
};

// ------------------ Handling Properties -------------------
const getProperties = async ()=>{
    
};

const createProperties = async ()=>{
    // const {
    //     description, 
    //     propertyType, 
    //     size, 
    //     beds, 
    //     bathrooms, 
    //     serviceCharges, 
    //     availableFrom, 
    //     location, 
    //     amenities, 
    //     images, 
    //     price, 
    //     completeionStatus, 
    //     propertyTag } = req.body;
};

const updateProperties = async ()=>{
    
};

const deleteProperties = async ()=>{
    
};

module.exports = {
    createPropertyTypes,
    createAmenities,
    getProperties, 
    createProperties,
    updateProperties, 
    deleteProperties, 
}