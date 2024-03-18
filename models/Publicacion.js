const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
    PostID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Imagen: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true,
    },
    Fecha: {
        type: Date,
        required: true,
    },
    

}
    
)