import mongoose from 'mongoose';

const mediaSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
     },
    createdAt: {
       type: Date,
       default: new Date()
    },

});

const postMediaMessage = mongoose.model('postMediaMessages', mediaSchema);

export default postMediaMessage;