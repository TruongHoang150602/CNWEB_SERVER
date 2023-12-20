const express = require("express");
const socialController = require("../controllers/socialController");

const router = express.Router();
// http://localhost:3001/social
router.post("", socialController.addSocial);
router.post("/comment", socialController.addComment);
router.get("", socialController.getRecentSocials); // ?page=1
router.get("/user", socialController.getSocialById); // ?id=1
router.put("", socialController.addLike);
router.get("/like", socialController.getLikeList); // ?id=1

module.exports = router;