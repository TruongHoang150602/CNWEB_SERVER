const Comment = require("../models/Comment");

exports.addComment = async (social_id, user_id, content, attachment, parent_comment_id) => {
    try {
        const newComment = new Comment({
            social_id,
            user_id,
            content,
            attachment,
            parent_comment_id,
        });
        await newComment.save();
        return { state: true, newComment };
    } catch (e) {
        return { state: false, message: e }
    }
}