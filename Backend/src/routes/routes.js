const { Router } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente} = require('../controllers/cliente.controller');
const { consultarusuarios, agregarusuarios, modificarusuario, eliminarusuario} = require('../controllers/usuario.controller');

const router = Router();


router.get('/api/clientes', consultarclientes);
router.post('/api/clientes/registro', agregarclientes);
router.put('/api/clientes/modificar', modificarcliente);
router.delete('/api/clientes/eliminar/:id', eliminarcliente);

router.get('/api/usuarios', consultarusuarios);
router.post('/api/usuarios/registro', agregarusuarios);
router.put('/api/usuarios/modificar', modificarusuario);
router.delete('/api/usuarios/eliminar/:id', eliminarusuario);



module.exports = router;