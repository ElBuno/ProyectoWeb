const mongoose = require ('mongoose');
const LikeSchema = new mongoose.Schema({
    LikeID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Fecha: {
        type: Date,
        required: true,
    },
    UsuarioID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
    }
    
});

module.exports = mongoose.model('Like', LikeSchema);

