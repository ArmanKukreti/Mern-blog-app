import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Weather"]
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)

export default Post