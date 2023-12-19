const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    title: { type: String, require: true },
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
    attachments: { type: String },
    like: { type: Number },
    created_at: { type: Date, default: Date.now, },
    created_by: { type: mongoose.Schema.ObjectId, ref: "User" },
})

const Social = mongoose.model('Social', socialSchema);

module.exports = Social;