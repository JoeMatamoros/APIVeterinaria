const {Router } = require('express');
const controladorTienda = require('../controllers/tiendacontroller');
const {body } = require('express-validator');
//const Validar = require('./loginroutes');
const router = Router();
router.get('/tipoproductos', controladorTienda.listaTipoProducto);
router.get('/productos', controladorTienda.listaProducto);
router.get('/imagen', controladorTienda.llamarImagen);
router.post('/factura', body('nombre').isLength({min: 2}).withMessage("El nombre debe ser mayor a 2 letras"),
            body('numtarjeta').isLength({min: 16}).withMessage("Número de tarjeta inválido"),
            body('cvc').isLength({min: 3}).withMessage("CVC inválido, debe tener solo 3 caracteres"),
            body('cvc').isLength({max: 3}).withMessage("CVC inválido, debe tener solo 3 caracteres") ,controladorTienda.facturar);

module.exports = router;