const usuarioService = require('../services/usuario.service');

const agregarusuarios = async (req, res) => {
    console.log(req.body);
    res.json({
       usuario: await usuarioService.guardarusuario(req.body)

    })

}

const consultarusuarios = async(req, res) => {
    res.json({
        usuarios: await usuarioService.consultarusuarios()
    })
}

const modificarusuario = async(req, res) => {
    res.json({
        usuario: await usuarioService.modificarusuario(req.body)
    })
}

const eliminarusuario = async(req, res) => {
    res.json({
        usuario: await usuarioService.eliminarusuario(req.params.id)
    })
}



module.exports = {consultarusuarios, agregarusuarios, modificarusuario, eliminarusuario};