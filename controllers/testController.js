const { handleError, ErrorHandler } = require("../helpers/error");
const shuffleArray = require("../helpers/shuffleArray");
const Option = require("../models/Option");
const Question = require("../models/Question");
const Test = require("../models/Test");

exports.getAllTests = async (req, res, next) => {
  try {
    const tests = await Test.find();
    if (!tests) throw new ErrorHandler(404, "No Tests are found!");
    res.send({
      tests,
    });

    next();
  } catch (error) {
    next(error);
  }
};

exports.getTestById = async (req, res, next) => {
  const { testId } = req.params;

  try {
    const test = await Test.findById(testId).populate({
      path: "questions",
      populate: {
        path: "options",
        model: "Option",
      },
    });

    if (!test || Object.keys(test).length === 0) {
      throw new ErrorHandler(404, "Test not found!");
    }

    // Shuffle options for each question
    test.questions.forEach((question) => {
      question.options = shuffleArray(question.options);
    });

    // Shuffle questions
    test.questions = shuffleArray(test.questions);

    res.send({
      test,
    });

    next();
  } catch (error) {
    next(error);
  }
};
