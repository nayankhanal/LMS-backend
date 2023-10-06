const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

const getLearnings = require("../controllers/LearningsController");

router.get("/mylearnings", isAuthenticated, getLearnings);

module.exports = router;
