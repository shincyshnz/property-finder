const express = require("express");
const { addFavorites } = require("../controllers/user");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post('/favorite', checkAuth, addFavorites);

module.exports = router;