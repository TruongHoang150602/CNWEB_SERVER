const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  question_type: {
    type: String,
    enum: ["multiple_choice", "choice", "input", "multiple_answer"],
    required: true,
  },
  options: [{ type: Schema.Types.ObjectId, ref: "Option" }],
  topic: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  explanation: {
    type: String,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
