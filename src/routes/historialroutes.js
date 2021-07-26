const {Router } = require('express');
const controladorHistorial = require('../controllers/historialcontroller');
const router = Router();

router.get('/mascota/:id', controladorHistorial.detallesMascota);
//router.put('/mascota/:id', controladorAgregar.eliminarMascota);
module.exports = router;