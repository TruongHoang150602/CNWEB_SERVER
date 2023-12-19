const express = require("express");
const socialController = require("../controllers/socialController");

const router = express.Router();

router.post("", socialController.addSocial);
router.post("/comment", socialController.addComment);
router.get("", socialController.getRecentSocials); // http://localhost:3001/social?page=1

module.exports = router;