import postMediaMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
        try {
                const mediaMsg = await postMediaMessage.find();
                res.status(200).json(mediaMsg)
        } catch (error) {
                res.status(404).json({Message: 'Could not get!'})
        }
}
export const createPosts = async (req,res)=>{
        const postBody = req.body;
        const newPost = new postMediaMessage(postBody);
        try {
            await newPost.save();
            res.status(201).json(newPost);    
        } catch (error) {
            res.status(409).json({message: error.message});    
        }
}  