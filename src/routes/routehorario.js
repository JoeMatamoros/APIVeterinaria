const {Router} = require('express');
const router = Router();
const controladorHorario = require('../controllers/controllerhorarios');

router.get('/obtenerHorarios',controladorHorario.listarHorarios);


module.exports = router;