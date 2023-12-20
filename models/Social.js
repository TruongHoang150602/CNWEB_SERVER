const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    title: { type: String, require: true },
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
    attachments: { type: String },
    like_list: [{ type: String }],
    created_at: { type: Date, default: Date.now, },
    created_by: { type: String, require: true },
})

const Social = mongoose.model('Social', socialSchema);

module.exports = Social;