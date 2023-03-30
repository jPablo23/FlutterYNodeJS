const { Schema, model } = require('mongoose');
const usuariosSchema = new Schema({
    nombre: String,
    apellido: String,
    telefono: String,
    email:{
        type: String,
        lowercasse: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = model('Usuario', usuariosSchema);