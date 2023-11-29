const UserResult = require("../models/UserResult");

// Service to save user result
exports.saveUserResult = async (userId, testId, answers, score) => {
  try {
    const userResult = new UserResult({
      userId,
      testId,
      answers,
      score,
    });

    await userResult.save();
    return userResult;
  } catch (error) {
    throw new Error("Error saving user result");
  }
};

// Service to get user result by userId and testId
exports.getUserResult = async (userId, testId) => {
  try {
    const userResult = await UserResult.findOne({ userId, testId });
    return userResult;
  } catch (error) {
    throw new Error("Error getting user result");
  }
};
