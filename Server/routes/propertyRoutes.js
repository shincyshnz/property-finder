const express = require("express");
const multer  = require('multer');
const router = express.Router();
const { checkAuth } = require("../middleware/checkAuth");
const { checkAdmin } = require("../middleware/checkAdmin");
const { 
    getPropertiesById,
    getAllProperties,
    createPropertyTypes,
    createAmenities,
    createProperties,
    updateProperties,
    deleteProperties,
} = require("../controllers/property");

// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './assets/uploads/'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null,Date.now() + '-' + file.originalname); // Rename the file to include the timestamp
    },
  });

const upload = multer({ storage: storage });

// Properties Types
router.post("/types/create" , checkAuth, checkAdmin, createPropertyTypes);
// router.post("/types/update" , checkAuth, checkAdmin, updatePropertyTypes);
// router.post("/types/delete/:id" , checkAuth, checkAdmin, deletePropertyTypes);

// Amenities
router.post("/amenities/create" , checkAuth, checkAdmin, createAmenities);
// router.post("/amenities/update" , checkAuth, checkAdmin, updateAmenities);
// router.post("/amenities/delete/:id" , checkAuth, checkAdmin, deleteAmenities);


// Properties
router.get("/" , getAllProperties);
router.get("/:id" , getPropertiesById);
router.post("/create" , checkAuth, checkAdmin, upload.array('images',12), createProperties);
router.put("/update/:id" , checkAuth, checkAdmin, updateProperties);
router.delete("/delete/:id" , checkAuth, checkAdmin, deleteProperties);

module.exports = router;