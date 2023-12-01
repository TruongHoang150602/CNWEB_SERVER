const express = require("express");
const router = express.Router();
const userResultController = require("../controllers/userResultController");

router.put("/:userResultId", userResultController.updateUserResult);
router.get("/:userId/:testId/:type", userResultController.getUserResult);
router.post("/:userId/:testId/:type", userResultController.createNewUserResult);

module.exports = router;
