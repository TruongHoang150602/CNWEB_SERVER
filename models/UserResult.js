const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAnswerSchema = new Schema({
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  options: [
    {
      option: { type: Schema.Types.ObjectId, ref: "Option" },
      isSelected: { type: Boolean },
    },
  ],
  answer: { type: String },
  showAnswer: {
    type: Boolean,
  },
});

const userResultSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    testId: {
      type: Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },
    answers: [userAnswerSchema],
    score: {
      type: Number,
      required: true,
    },
    isSubmitted: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["practice", "test"],
      required: true,
    },
  },
  {
    timestamps: true, // Thêm cấu trúc timestamps
  }
);

const UserResult = mongoose.model("UserResult", userResultSchema);

module.exports = UserResult;
