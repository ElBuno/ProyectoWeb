const Like = require ('../models/Like');

class LikeDao{

    constructor() { }

    async crearLike (LikeData) {
        try{
        const Like = new Like(LikeData);
        return await Like.save();
        } catch (error){
            throw error;
        }
        
    }

    async getLikePorID(id){
        try{
            return await Like.findById(id);
        } catch (error){
            throw error;
        }
    }
    
    async actualizarLike(id, LikeData){
        try{
            return await Like.findByIdAndUpdate(id, ImgData);
        } catch (error){
            throw error;
        }
    }

    async eliminarLike(id){
        try{
            return await Like.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = new LikeDao();