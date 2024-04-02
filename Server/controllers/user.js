const mongoose = require("mongoose");
const { PropertyModel } = require("../models/propertyModel");
const { UserModel } = require("../models/userModel");

const searchProperties = async (req, res, next) => {
    const { 
        pt : propertyTag, //values : ['rent', 'buy', 'new project', 'commercial'] 
        s : searchString,
        pty : propertyType,
        bd : beds,
        bth : baths,
        pr1 : price1,
        pr2 : price2,
    } = req.query;

    try {
        // const aggregationPipeline = [
        //     {
        //         $lookup: {
        //             from: "propertytypes",
        //             localField : "propertyType",
        //             foreignField : "_id",
        //             as: "propertyTypesPopulated"
        //         }
        //     },
        //     {
        //         $match : {
        //             $and : [
        //                 { propertyTag : propertyTag },
        //                 { $or:[
        //                     {location : searchString},
        //                     {building : searchString},
        //                 ]},
        //                 {"propertyTypesPopulated[0].typeName" : propertyType},
        //                 {beds : beds},
        //                 {bathrooms: baths},
        //                 {$and : [
        //                     {price : { $gte : price1 }},
        //                     {price : { $lte : price2 }}
        //                 ]},
                        
        //             ]
        //          } 
        //     },
        // ];

        let aggregationPipeline = [
            {
                $lookup: {
                    from: "PropertyTypes",
                    localField: "propertyType",
                    foreignField: "_id",
                    as: "propertyTypesPopulated"
                }
            }
        ];
        
        let matchStage = {
            $match: {
                $and: [
                    { propertyTag: propertyTag }
                ]
            }
        };
        
        // Add optional matches based on conditions
        if (searchString) {
            matchStage.$match.$and.push({
                $or: [
                    { location: searchString },
                    { building: searchString }
                ]
            });
        }
        
        if (propertyType) {
            matchStage.$match.$and.push({
                "propertyTypesPopulated.0.typeName": propertyType
            });
        }
        
        if (beds) {
            matchStage.$match.$and.push({ beds: parseInt(beds) });
        }
        
        if (baths) {
            matchStage.$match.$and.push({ bathrooms: parseInt(baths) });
        }
        
        if (price1 && price2) {
            matchStage.$match.$and.push({
                $and: [
                    { price: { $gte: parseInt(price1) } },
                    { price: { $lte: parseInt(price2) } }
                ]
            });
        }
        
        aggregationPipeline.push(matchStage);

        const result = await PropertyModel.aggregate(aggregationPipeline);   
        // console.log(aggregationPipeline);  

        res.status(400).json({
            result, 
        });
    } catch (error) {
        next(error);
    }
}

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

module.exports = {
    addFavorites,
    searchProperties,
}