const userService = require("../services/userService");

exports.getUsers = async (req, res, next) => {
  try {
    const { query } = req.body;
    console.log("Query: ", query);
    const users = await userService.getUsers(query || "");
    res.json(users);
    next();
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.json(user);
    next();
  } catch (error) {
    next(error);
  }
};

exports.getFullUserInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getFullUserInfoById(id);
    res.json(user);
    next();
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    const { name, id } = req.body;
    const newUser = await userService.createNewUser(name, id);
    res.json(newUser);
    next();
  } catch (error) {
    next(error);
  }
};
exports.updateUserInfo = async (req, res, next) => {
  try {
    const updatedUser = req.body;
    const updatedUserInfo = await userService.updateUserInfo(updatedUser);
    res.json(updatedUserInfo);
    next();
  } catch (error) {
    next(error);
  }
};
