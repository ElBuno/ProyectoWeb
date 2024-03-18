const Post = require ('../models/Post');

class PostDao{

    constructor() { }

    async crearPost (PostData) {
        try{
        const Post = new Post(PostData);
        return await Post.save();
        } catch (error){
            throw error;
        }
        
    }

    async getPostPorID(id){
        try{
            return await Post.findById(id);
        } catch (error){
            throw error;
        }
    }
    
    async actualizarPost(id, PostData){
        try{
            return await Post.findByIdAndUpdate(id, PostData);
        } catch (error){
            throw error;
        }
    }

    async eliminarPost(id){
        try{
            return await Post.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = new PostDao();