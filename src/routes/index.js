const express = require("express");
const gptMessage = require("../controllers");

const router = express.Router();

// -------------------------------------------
// Welcome message
// -------------------------------------------
router.get('/', gptMessage);


module.exports = router;
