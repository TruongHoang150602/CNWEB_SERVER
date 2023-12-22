const express = require("express");
const socialController = require("../controllers/socialController");

const router = express.Router();
// http://localhost:3001/social

// {
//     "author_id":"ilVcEIE9UvOYqMxWjXk2NKdFmi63",
//     "content": "Social",
//     "attachment": "http://google.com"
// }
router.post("", socialController.addSocial);

// {
//     "social_id": "65831ca01f3eb3f6bd937766",
//     "user_id": "GpQp6ysjnFShVNmHxsNvGUNliln2",
//     "content": "Have a nice day",
//     "attachment": "www.facebook.com"
// }
router.post("/comment", socialController.addComment);
router.get("", socialController.getRecentSocials); // ?page=1
router.get("/user", socialController.getSocialById); // ?id=1

// {
//     "author_id": "PLL1tdWx4ndbdVRvVU48fNWJgbH3",
//     "social_id": "6582b8d301771f172f03f1e5"
// }
router.put("", socialController.addLike);
// router.get("/like", socialController.getLikeList); // ?id=1

module.exports = router;