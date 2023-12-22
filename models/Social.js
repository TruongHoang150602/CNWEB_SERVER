const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    content: { type: String, require: true },
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
<<<<<<< HEAD
    attachments: { type: String },
=======
    attachment: { type: String },
>>>>>>> 695b3c8a5e6746ebcf7403a87b00505341ac219c
    like_list: [{ type: String }],
    created_at: { type: Date, default: Date.now, },
    created_by: { type: String, require: true },
})

const Social = mongoose.model('Social', socialSchema);

module.exports = Social;