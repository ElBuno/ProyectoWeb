const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
   // UsuarioID: {
  //      type: mongoose.Schema.Types.ObjectId,
   //     required: true,
 //   },
    Nombre: {
        type: String,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
    },
    Contraseña: {
        type: String,
        required: true,
    },
    SignDate: {
        type: Date,
        required: true,
    },
});
module.exports = mongoose.model('Usuario', UserSchema);
