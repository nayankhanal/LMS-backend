const express = require("express");
const router = express.Router();

const { signupUser } = require("../controllers/signupController");

router.post("/signup", signupUser);

module.exports = router;
