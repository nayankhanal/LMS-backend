const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated");
const { getcoursedetails } = require("../controllers/courseDetailsController");

router.get("/courses/details/:id", getcoursedetails);

module.exports = router;
