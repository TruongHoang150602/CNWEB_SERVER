const shuffleArray = require("../helpers/shuffleArray");
const Test = require("../models/Test");

// Service to get all tests
exports.getAllTests = async () => {
  try {
    const tests = await Test.find();
    return tests;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

// Service to get a single test by ID
exports.getTestById = async (testId) => {
  try {
    const test = await Test.findById(testId).populate("questions");

    if (!test || Object.keys(test).length === 0) {
      throw new ErrorHandler(404, "Test not found!");
    }

    // Shuffle options for each question
    test.questions.forEach((question) => {
      question.options = shuffleArray(question.options);
    });

    // Shuffle questions
    test.questions = shuffleArray(test.questions);

    return test;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
