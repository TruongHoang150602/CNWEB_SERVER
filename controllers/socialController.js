const Social = require("../models/Social");
const SocialService = require("../services/socialService");
const CommentService = require("../services/commentService");
const UserService = require("../services/userService");
const { ErrorHandler } = require("../helpers/error");

const addSocial = async (req, res, next) => {
  try {
    const input = req.body;
    if (!input.author_id || !input.content) {
      throw new ErrorHandler(400, "Cannot be left blank: author_id or content");
    }
    const result = await SocialService.addSocial(
      input.content,
      input.attachment,
      input.author_id
    );
    return res.status(200).json("Add Social Success!");
  } catch (error) {
    next(error);
  }
};

const addComment = async (req, res, next) => {
  try {
    const input = req.body;
    const social = await Social.findById(input.social_id);
    if (!social) {
      throw new ErrorHandler(400, "Social does not exist");
    }
    const result = await CommentService.addComment(
      input.social_id,
      input.user_id,
      input.content,
      input.attachment,
      input.parent_comment_id
    );
    social.comments.push(result._id);
    await social.save();
    return res.status(200).json("Add Comment Success!");
  } catch (e) {
    next(e);
  }
};

const getRecentSocials = async (req, res, next) => {
  try {
    const limit = 10;
    const skip = (req.query.page - 1) * limit;
    const result = await SocialService.getRecentSocials(skip, limit);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getSocialById = async (req, res, next) => {
  try {
    const result = await SocialService.getSocialById(req.query.id);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const addLike = async (req, res, next) => {
  try {
    const author_id = req.body.author_id;
    const social_id = req.body.social_id;
    const social = await Social.findById(social_id);
    if (!social) {
      throw new ErrorHandler(400, "Social does not exist");
    }
    social.like_list.push(author_id);
    social.save();
    return res.status(200).json("Liked");
  } catch (e) {
    next(e);
  }
};

const getLikeList = async (req, res, next) => {
  try {
    const social_id = req.query.id;
    const social = await Social.findById(social_id);
    if (!social) {
      throw new ErrorHandler(400, "Social does not exist");
    }
    const list_author = social.like_list;
    var comments = [];
    await Promise.all(
      list_author.map(async (author_id) => {
        const author = await UserService.getUserById(author_id);
        comments.push(author.name);
      })
    );
    return res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addSocial: addSocial,
  addComment: addComment,
  getRecentSocials: getRecentSocials,
  getSocialById: getSocialById,
  addLike: addLike,
  getLikeList: getLikeList,
};
