import postMediaMessage  from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
        try{
                const postMessage = await postMediaMessage.find();
                console.log(postMessage);
        } catch(error){
                res.status(404).json({message: error.message});
        }
}