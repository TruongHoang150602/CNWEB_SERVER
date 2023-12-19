const Social = require("../models/Social")
const User = require("../models/User")
const CommentService = require("../services/commentService");

exports.addSocial = async (title, attachment, author_id) => {
    try {
        const newSocial = new Social({ title: title, attachments: attachment, like: 0, created_by: author_id });
        await newSocial.save();
        return { state: true };
    } catch (e) {
        return { state: false, message: e };
    }
}

exports.getRecentSocials = async (skip, limit) => {
    try {
        const dataRes = [];
        const recentSocial = await Social.find()
            .sort({ created_at: -1 })
            .skip(skip)
            .limit(limit);

        await Promise.all(recentSocial.map(async (social) => {
            const getAuthor = await User.findById(social.created_by);
            var cmts = [];
            if (social.comments) {
                await Promise.all(social.comments.map(async (comment) => {
                    const getComment = await CommentService.getCommentsById(comment);
                    if (getComment.state) {
                        cmts.push(getComment.resData);
                    }
                }))
            }
            const result = {
                id: social._id,
                author: {
                    id: getAuthor._id,
                    avatar: getAuthor.avatar,
                    name: getAuthor.name,
                },
                comments: cmts,
                createdAt: social.created_at,
                likedList: [],
                likes: social.like,
                attachments: social.attachments,
                content: social.title,
            }
            dataRes.push(result);
        }))
        return { state: true, dataRes };
    } catch (e) {
        console.log(e);
        return { state: false };
    }
}

exports.getSocialById = async (id) => {
    try {
        const dataRes = [];
        const results = await Social.find({ created_by: id }).sort({ created_at: -1 });
        await Promise.all(results.map(async (social) => {
            const getAuthor = await User.findById(social.created_by);
            var cmts = [];
            if (social.comments) {
                await Promise.all(social.comments.map(async (comment) => {
                    const getComment = await CommentService.getCommentsById(comment);
                    if (getComment.state) {
                        cmts.push(getComment.resData);
                    }
                }))
            }
            const result = {
                id: social._id,
                author: {
                    id: getAuthor._id,
                    avatar: getAuthor.avatar,
                    name: getAuthor.name,
                },
                comments: cmts,
                createdAt: social.created_at,
                likedList: [],
                likes: social.like,
                attachments: social.attachments,
                content: social.title,
            }
            dataRes.push(result);
        }))
        return { state: true, dataRes };
    } catch (e) {
        console.log(e);
        return { state: false };
    }
}