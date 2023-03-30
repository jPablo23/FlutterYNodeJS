const usauriomodel = require('../models/usuarios.model');



class UsuarioService {
    UsuarioService() {}

    async guardarusuario(usuario = new usauriomodel()) {
        try {
            var usuarioGuardado;
            await usauriomodel.create(usuario).then( (value) => {
                usuarioGuardado =  value;
            });

            return usuarioGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarusuarios() {
        try {

            return await usauriomodel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarusuario(idc) {
        console.log(idc);
        var usuarioEliminado;
        try {
            await usauriomodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                usuarioEliminado = value;
            });

            return usuarioEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarusuario(usuariomod) {

        var usuarioModificado;
        try {
            await usauriomodel.findOneAndUpdate({
                _id: usuariomod._id
            }, usuariomod).then( (value) => {

                usuarioModificado = usuariomod;
            });

            return usuarioModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new UsuarioService();