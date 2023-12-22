const { handleError, ErrorHandler } = require("../helpers/error");
const Social = require("../models/Social");
const User = require("../models/User");
const CommentService = require("../services/commentService");
const UserService = require("../services/userService");
const CommentConvert = require("../convert/comment");

exports.addSocial = async (content, attachment, author_id) => {
  try {
    const newSocial = new Social({
      content: content,
      attachment: attachment,
      like: 0,
      created_by: author_id,
    });
    await newSocial.save();
    return true;
  } catch (e) {
    throw new ErrorHandler(400, "Please enter complete information");
  }
};

exports.getRecentSocials = async (skip, limit) => {
  try {
    const dataRes = [];
    const recentSocial = await Social.find()
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(limit)
      .populate("comments");

    await Promise.all(
      recentSocial.map(async (social) => {
        const getAuthor = await UserService.getUserById(social.created_by);
        const comments = await CommentConvert.convertArrayComment(
          social.comments
        );
        const result = {
          id: social._id,
          author: getAuthor,
          comments: comments,
          createdAt: social.created_at,
          likedList: social.like_list,
          likes: social.like,
          attachment: social.attachment,
          content: social.content,
        };
        dataRes.push(result);
      })
    );
    return dataRes;
  } catch (e) {
    throw new ErrorHandler(500, "Server Error");
  }
};

exports.getSocialById = async (id) => {
  try {
    const dataRes = [];
    const results = await Social.find({ created_by: id })
      .sort({ created_at: -1 })
      .populate("comments");
    await Promise.all(
      results.map(async (social) => {
        const getAuthor = await UserService.getUserById(social.created_by);
        const comments = await CommentConvert.convertArrayComment(
          social.comments
        );
        const result = {
          id: social._id,
          author: getAuthor,
          comments: comments,
          createdAt: social.created_at,
          likedList: social.like_list,
          likes: social.like,
          attachment: social.attachment,
          content: social.content,
        };
        dataRes.push(result);
      })
    );
    return dataRes;
  } catch (e) {
    throw new ErrorHandler(500, "Server Error");
  }
};
