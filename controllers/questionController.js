// const Question = require("../models/Question");

// const getAllQuestions = async (req, res, next) => {
//   let questions;
//   try {
//     questions = await Question.find();
//   } catch (error) {
//     return next(error);
//   }
//   if (!questions || questions.length === 0) {
//     return res.status(404).json({ message: "No questions found" });
//   }
//   return res.status(200).json(questions);
// };

// exports.getAllQuestions = getAllQuestions;
