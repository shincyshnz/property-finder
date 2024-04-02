const mongoose = require("mongoose");
const { AmenitiesModel } = require("../models/amenitiesModel");
const { PropertyModel } = require("../models/propertyModel");
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
const getAllProperties = async (req, res, next)=>{
    const resultsPerPage = process.env.RESULTS_PER_PAGE;
    const { page } = req.query; // starts from 0

    try {
        const totalResults = await PropertyModel.find().count();
        const propertyDetails = await PropertyModel.find()
            .sort({createdAt : 'descending'})
            .lean()
            .limit(resultsPerPage)
            .skip(page * resultsPerPage);

        if(propertyDetails.length <= 0){
            res.status(400).json({
                result : "Properties not found" 
            });
        }
        res.status(200).json({
            result : propertyDetails,
            totalResults,
            resultsPerPage : parseInt(resultsPerPage),
        });
        
    } catch (error) {
        next(error);
    }
};

const getPropertiesById = async (req, res, next)=>{
    const { id } = req.params;
    
    if(!id) {
        res.status(400).json({
            message : "Property id is required"
        });
    }
    
    try {
        const propertyDetails = await PropertyModel.findById( id );
        if( propertyDetails ){
            res.status(200).json({
                result : propertyDetails,
            })
        }
    } catch (error) {
        next(error);
    }
};

const createProperties = async (req, res, next)=>{
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({
            message : 'file upload failed'
        });
    }

    try {
        const images = req.files.map(file => file.filename);
        // convert amenities to ObjectId
        const amenities =req.body.amenities.split(",").map(amenity => new mongoose.Types.ObjectId(amenity));
        
        const propertyDetails = { ...req.body, images, amenities } 

        const newProperty = await PropertyModel.create(propertyDetails);
        if(newProperty){
            res.status(200).json({
                message : "Property created successfully"
            });
        }
    } catch (error) {
        next(error);
    }

};

const updateProperties = async (req, res, next)=>{
    const {id} = req.params;
    const { ...propertyDetails } = req.body;
    
    if(!id) {
        throw new Error("Property id is required");
    }
    
    try {
        const updatedProperty = await PropertyModel.findByIdAndUpdate( id , propertyDetails, {new : true} );
        if(updatedProperty){
            res.status(200).json({
                result : updatedProperty,
                message : "Property updated successfully",
            });
        }
    } catch (error) {
        next(error);
    }
};

const deleteProperties = async (req, res, next)=>{
    const { id } = req.params;
    
    if(!id) {
        res.status(400).json({
            message : "Property id is required"
        });
    }

    try {
        await PropertyModel.findByIdAndDelete( id );
        
        res.status(200).json({
            message : "Property deleted."
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPropertiesById, 
    getAllProperties,
    createPropertyTypes,
    createAmenities,
    createProperties,
    updateProperties, 
    deleteProperties, 
}