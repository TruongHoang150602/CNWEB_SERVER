const userService = require("../services/userService");

exports.convertOneComment = async (comment) => {
  var author = await userService.getUserById(comment.user_id);
  return {
    id: comment._id,
    author: author,
    createdAt: comment.created_at,
    attachment: comment.attachment,
    content: comment.content,
    parent: comment.parent_comment_id,
  };
};

exports.convertArrayComment = async (comments) => {
  var res = [];
  await Promise.all(
    comments.map(async (comment) => {
      const result = await this.convertOneComment(comment);
      res.push(result);
    })
  );
  return res;
};
