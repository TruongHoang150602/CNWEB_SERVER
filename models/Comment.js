const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    social_id: { type: Schema.ObjectId, ref: "Social", require: true },
    user_id: { type: String, require: true },
    content: { type: String, require: true },
    attachment: { type: String, default: null },
    parent_comment_id: { type: Schema.ObjectId, ref: "Comment", default: null },
    created_at: { type: Date, default: Date.now },
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;