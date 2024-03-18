const Comentario = require ('../models/Comentario');

class ComentarioDao{

    constructor() { }

    async crearComentario (CommentData) {
        try{
        const Comentario = new Comentario(CommentData);
        return await Comentario.save();
        } catch (error){
            throw error;
        }
        
    }

    async getComentarioPorID(id){
        try{
            return await Comentario.findById(id);
        } catch (error){
            throw error;
        }
    }
    
    async actualizarComentario(id, CommentData){
        try{
            return await Comentario.findByIdAndUpdate(id, CommentData);
        } catch (error){
            throw error;
        }
    }

    async eliminarComentario(id){
        try{
            return await Comentario.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = new ComentarioDao();