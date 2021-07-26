const {Router } = require('express');
const controladorcitas = require('../controllers/citascontroller');
const router = Router();

router.get('/mascotas/:id', controladorcitas.general);
router.get('/horarios/:id', controladorcitas.listaHorarios);
router.get('/tipocita', controladorcitas.listaTipoCitas);
router.post('/agendar', controladorcitas.agregar);

module.exports = router;