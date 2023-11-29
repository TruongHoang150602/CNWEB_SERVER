const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

router.get("/", testController.getAllTests);
router.get("/:testId", testController.getTestById);

module.exports = router;
