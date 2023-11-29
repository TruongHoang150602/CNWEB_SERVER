const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAnswerSchema = new Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  options: [{ type: Schema.Types.ObjectId, ref: "Option" }],
  userAnswer: [
    {
      answer: {
        type: String,
      },
      is_correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
  showAnswer: {
    type: Boolean,
  },
});

const userResultSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true,
  },
  answers: [userAnswerSchema],
  score: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
  },
});

const UserResult = mongoose.model("UserResult", userResultSchema);

module.exports = UserResult;
