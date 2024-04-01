const express = require("express");
const { addFavorites, searchProperties } = require("../controllers/user");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get('/search', searchProperties);
router.post('/favorite', checkAuth, addFavorites);

module.exports = router;