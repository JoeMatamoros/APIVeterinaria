const {Router } = require('express');
const controladorAgregar = require('../controllers/newmascota');
const router = Router();

router.post('/mascota', controladorAgregar.agregar);
router.put('/mascota/:id', controladorAgregar.eliminarMascota);
module.exports = router;