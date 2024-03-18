const mongoose = require ('mongoose');
const CommentSchema = new mongoose.Schema ({
    ComentarioID:  {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Texto: {
        type: String,
        required: true,
    },
    Fecha: {
        type: Date,
        require: true,
    },
    UsuarioID:{
        type: String,
        required:true,
    },
    PostID: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Comentario', CommentSchema);