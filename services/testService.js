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
    if (!test) {
      throw new Error("Test not found");
    }

    return test;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
