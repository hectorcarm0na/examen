const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pintoresSchema = new Schema ({
    name:{
        type:String,
        required:[true, 'requerimos el nombre']
    },
    corriente:{
        type:String,
        required:[true, 'requerimos la corriente']
    },
    nacionalidad:{
        type:String
    },
    pintura:{
        type:String
    }
});
module.exports = mongoose.model('pintores',pintoresSchema)