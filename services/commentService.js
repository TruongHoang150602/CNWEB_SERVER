const { ErrorHandler } = require("../helpers/error");
const Comment = require("../models/Comment");
const User = require("../models/User");

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
        return newComment;
    } catch (e) {
        throw new ErrorHandler(500, "Server Error");
    }
}

// exports.getCommentsById = async (id) => {
//     try {
//         const comment = await Comment.findById(id);
//         const author = await User.findById(comment.user_id);
//         const resData = {
//             id: comment._id,
//             author: {
//                 id: author._id,
//                 avatar: author.avatar,
//                 name: author.name,
//             },
//             createdAt: comment.created_at,
//             content: comment.content,
//             parent: comment.parent_comment_id,
//         };
//         return { state: true, resData };
//     } catch (e) {
//         return { state: false };
//     }
// }