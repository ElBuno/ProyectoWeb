const Usuario = require ('../models/Usuario');

class UsuarioDao{

    constructor() { }

    async crearUsuario (userData) {
        try{
        const usuario = new Usuario(userData);
        return await usuario.save();
        } catch (error){
            throw error;
        }
        
    }

    async getUsuarioPorID(id){
        try{
            return await Usuario.findById(id);
        } catch (error){
            throw error;
        }
    }
    
    async actualizarUsuario(id, userData){
        try{
            return await Usuario.findByIdAndUpdate(id, userData);
        } catch (error){
            throw error;
        }
    }

    async eliminarUsuario(id){
        try{
            return await Usuario.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = new UsuarioDao();
    //const getUsuario= () => {
    //    return Usuario.find();
    //};
    //
    //const getUsuarioPorId = (UsuarioID) => {
    //    return Usuario.findById(UsuarioID);
    //};
    //
    //const actualizarUsuario = (UsuarioID, DataActualizada) => {
    //   return Usuario.findByIdAndUpdate(UdsuarioID, DataActualizada, { new: true});
    //};
    



