const User = require("../models/User");

exports.getUsers = async (query) => {
  try {
    const users = await User.find({ name: new RegExp(query, "i") })
      .select("id name avatar lastActivity")
      .exec();

    return users;
  } catch (error) {
    throw new ErrorHandler(404, "Error getting users");
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findOne({ id: id })
      .select("id name avatar lastActivity")
      .exec();

    return user;
  } catch (error) {
    throw new ErrorHandler(404, "Error getting user by id");
  }
};

exports.getFullUserInfoById = async (id) => {
  try {
    const user = await User.findOne({ id: id }).exec();
    if (!user) {
      throw new ErrorHandler(404, "User not found");
    }

    return user;
  } catch (error) {
    throw new ErrorHandler(500, "Error getting full user information by id");
  }
};

exports.createNewUser = async (name, userId) => {
  try {
    const newUser = new User({
      name: name,
      id: userId,
    });

    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new ErrorHandler(500, "Error creating new user");
  }
};

exports.updateUserInfo = async (updatedUser) => {
  try {
    const { id } = updatedUser;

    // Kiểm tra xem người dùng có tồn tại không
    const existingUser = await User.findOne({ id: id });
    if (!existingUser) {
      throw new ErrorHandler(404, "User not found");
    }

    // Cập nhật thông tin người dùng
    existingUser = {
      ...updatedUser,
    };

    const savedUser = await existingUser.save();
    return savedUser;
  } catch (error) {
    throw new ErrorHandler(500, "Error updating user information");
  }
};
