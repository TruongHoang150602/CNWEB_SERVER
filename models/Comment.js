const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    social_id: { type: Schema.ObjectId, ref: "Social", require: true },
    user_id: { type: Schema.ObjectId, ref: "User", require: true },
    content: { type: String, require: true },
    attachments: { type: String },
    parent_comment_id: { type: Schema.ObjectId, ref: "Comment", default: null },
    created_at: { type: Date, default: Date.now },
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;