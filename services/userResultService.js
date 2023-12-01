const {
  converTestToUserAnswerSchema,
} = require("../convert/UserResultConvert");
const { ErrorHandler } = require("../helpers/error");
const UserResult = require("../models/UserResult");
const { getTestById } = require("./testService");

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
    throw new ErrorHandler(404, "Error saving user result");
  }
};

// Service to get user result by userId and testId
exports.getUserResult = async (userId, testId, type) => {
  try {
    const userResult = await UserResult.findOne({
      userId,
      testId,
      type,
    })
      .sort({ createdAt: -1 })
      .limit(1)
      .populate("answers.questionId")
      .populate("answers.options.option");
    return userResult;
  } catch (error) {
    throw new ErrorHandler(404, "Error getting user result");
  }
};

// Service to get user result by userId and testId
exports.createNewUserResult = async (userId, testId, type) => {
  try {
    const test = await getTestById(testId);
    const userAnswer = converTestToUserAnswerSchema(test);
    const userResult = new UserResult({
      userId,
      testId,
      answers: userAnswer,
      score: 0,
      isSubmitted: false,
      type,
    });
    await userResult.save();

    const populatedUserResult = await UserResult.findById(userResult._id)
      .populate("answers.questionId")
      .populate("answers.options.option");

    return populatedUserResult;
  } catch (error) {
    throw new ErrorHandler(404, "Error getting user result");
  }
};
