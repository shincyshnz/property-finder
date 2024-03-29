const express = require("express");
const router = express.Router();
const {getProperties, createProperties, updateProperties, deleteProperties} = require("../controllers/")

router.get("/" , getProperties);
router.post("/create" , createProperties);
router.post("/update" , updateProperties);
router.post("/delete/:id" , deleteProperties);

module.exports = router;