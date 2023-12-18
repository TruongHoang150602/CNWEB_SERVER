const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    title: { type: String, require: true },
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
    attachments: { type: String },
    like: { type: Number },
})

const Social = mongoose.model('Social', socialSchema);

module.exports = Social;