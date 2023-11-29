const User = require("../models/User"); // Import model "User"

// Controller để lấy tất cả người dùng
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ highScore: -1 }).exec();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller để thêm một người dùng mới
const addUser = async (req, res) => {
  const { id, name, highScore } = req.body;
  console.log(req.body);

  try {
    const newUser = new User({
      id,
      name,
      highScore,
    });
    console.log(newUser);
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
};
