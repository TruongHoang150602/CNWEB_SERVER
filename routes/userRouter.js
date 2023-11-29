const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.delete("/:userId", deleteUser);

module.exports = router;
