const express = require("express");
const testController = require("../controllers/testController");
const socialController = require("../controllers/socialController");

const router = express.Router();

router.post("/", socialController.addSocial);
router.post("/comment", socialController.addComment);

module.exports = router;