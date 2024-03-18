const Imagen = require ('../models/Imagen');

class ImagenDao{

    constructor() { }

    async crearImagen (ImgData) {
        try{
        const Imagen = new Imagen(ImgData);
        return await Imagen.save();
        } catch (error){
            throw error;
        }
        
    }

    async getImagenPorID(id){
        try{
            return await Imagen.findById(id);
        } catch (error){
            throw error;
        }
    }
    
    async actualizarImagen(id, ImgData){
        try{
            return await Imagen.findByIdAndUpdate(id, ImgData);
        } catch (error){
            throw error;
        }
    }

    async eliminarImagen(id){
        try{
            return await Imagen.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = new ImagenDao();