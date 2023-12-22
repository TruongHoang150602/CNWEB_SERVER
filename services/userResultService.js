const {
  converTestToUserAnswerSchema,
  convertUserResultToOutputStandard,
} = require("../convert/UserResultConvert");
const { ErrorHandler } = require("../helpers/error");
const UserResult = require("../models/UserResult");
const { getTestById } = require("./testService");

exports.updateUserResult = async (
  userAnswerId,
  answers,
  isSubmitted,
  score
) => {
  try {
    // Find the existing user result
    const existingUserResult = await UserResult.findById(userAnswerId);

    if (!existingUserResult) {
      throw new ErrorHandler(404, "User result not found");
    }

    existingUserResult.answers = answers;
    existingUserResult.isSubmitted = isSubmitted;
    existingUserResult.score = score;

    // Save the updated user result
    await existingUserResult.save();

    return existingUserResult;
  } catch (error) {
    throw new ErrorHandler(500, "Error saving user result", error);
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
      .populate("answers.question")
      .populate("answers.options.option");
    return convertUserResultToOutputStandard(userResult);
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
      .populate("answers.question")
      .populate("answers.options.option");

    return convertUserResultToOutputStandard(populatedUserResult);
  } catch (error) {
    throw new ErrorHandler(404, "Error getting user result");
  }
};
