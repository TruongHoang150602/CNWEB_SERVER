const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  question_id: { type: Schema.Types.ObjectId, ref: "Question" },
  option_text: {
    type: String,
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
});

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
