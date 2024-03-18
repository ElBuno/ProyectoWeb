const mongoose = require ('mongoose');

const ImagenSchema= new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    PostID: {
        type: String,
        required: true,
    }

})