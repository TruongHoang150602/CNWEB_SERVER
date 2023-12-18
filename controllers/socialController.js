const Social = require("../models/Social");
const serviceSocial = require("../services/socialService");
const serviceComment = require("../services/commentService");

const addSocial = async (req, res) => {
    try {
        const input = req.body;
        if (!input.title || !input.attachment) {
            return res.status(400).json("Vui lòng cung cấp đầy đủ thông tin: title và attachment.");
        }

        const result = await serviceSocial.addSocial(input.title, input.attachment);
        if (result.state) {
            return res.status(200).json("Add Social Success!");
        } else {
            return res.status(500).json("Add Social Fail!");
        }
    } catch (error) {
        return res.status(500).json("Lỗi server");
    }
};

const addComment = async (req, res) => {
    try {
        const input = req.body;
        const social = await Social.findById(input.social_id);
        if (!social) {
            return res.status(400).json("Social khong ton tai!");
        }
        const result = await serviceComment.addComment(
            input.social_id,
            input.user_id,
            input.content,
            input.attachment,
            input.parent_comment_id,
        );
        social.comments.push(result.newComment._id);
        await social.save();
        return res.status(200).json("Add Comment Success!");
    } catch (e) {
        console.log(e);
        return res.status(500).json("Lỗi server");
    }
}

module.exports = {
    addSocial: addSocial,
    addComment: addComment,
};
