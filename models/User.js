const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt:{ type: Date, default: Date.now},
  avatar: {type: String},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
