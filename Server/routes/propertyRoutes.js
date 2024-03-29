const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/checkAuth");
const { checkAdmin } = require("../middleware/checkAdmin");
const { 
    createPropertyTypes,
    createAmenities,
    getProperties,
    createProperties,
    updateProperties,
    deleteProperties,
} = require("../controllers/property");

// Properties Types
router.post("/types/create" , checkAuth, checkAdmin, createPropertyTypes);
// router.post("/types/update" , checkAuth, checkAdmin, updatePropertyTypes);
// router.post("/types/delete/:id" , checkAuth, checkAdmin, deletePropertyTypes);

// Amenities
router.post("/amenities/create" , checkAuth, checkAdmin, createAmenities);
// router.post("/amenities/update" , checkAuth, checkAdmin, updateAmenities);
// router.post("/amenities/delete/:id" , checkAuth, checkAdmin, deleteAmenities);


// Properties
router.get("/" , getProperties);
router.post("/create" , checkAuth, checkAdmin, createProperties);
router.post("/update" , checkAuth, checkAdmin, updateProperties);
router.post("/delete/:id" , checkAuth, checkAdmin, deleteProperties);

module.exports = router;