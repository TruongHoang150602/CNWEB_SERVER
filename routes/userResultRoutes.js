const express = require("express");
const router = express.Router();
const userResultController = require("../controllers/userResultController");

// Save user result
router.post("/", userResultController.saveUserResult);

// Get user result by userId and testId
router.get("/:userId/:testId", userResultController.getUserResult);

module.exports = router;
