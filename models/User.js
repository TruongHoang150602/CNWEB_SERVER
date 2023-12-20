const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String },
    avatar: { type: String },
    address: { type: String },
    gender: { type: String },
    dob: { type: Date },
    mssv: { type: Number },
    class: { type: String },
    description: { type: String },
    hobby: { type: String },
    lastActivity: { type: Number, default: new Date().getTime() },
  },
  {
    timestamps: true, // Thêm cấu trúc timestamps
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
