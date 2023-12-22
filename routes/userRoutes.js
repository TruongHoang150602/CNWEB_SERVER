const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/fullUserInfo/:id", userController.getFullUserInfoById);
router.get("/userById/:id", userController.getUserById);
router.post("/userByQuery", userController.getUsers);
router.post("", userController.createNewUser);
router.put("", userController.updateUserInfo);

module.exports = router;
