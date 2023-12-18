const Social = require("../models/Social")

exports.addSocial = async (title, attachment) => {
    try {
        const newSocial = new Social({ title: title, attachments: attachment, like: 0 });
        console.log(newSocial);
        await newSocial.save();
        return { state: true };
    } catch (e) {
        return { state: false, message: e };
    }
}