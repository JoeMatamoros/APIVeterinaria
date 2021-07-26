const {Router } = require('express');
const controladorlogin = require('../controllers/logincontroller');
const Cliente = require('../models/clientesmodelo');
const {body } = require('express-validator');
const passport = require('passport');
const router = Router();


router.get('/', validarAutenticado, controladorlogin.lista);
router.post('/iniciar', passport.authenticate('iniciosesion',{
    successRedirect:'/api',
    failureRedirect:'/api/login/error'}), controladorlogin.iniciarSesion);
router.get('/error',(req, res)=>{
        console.log(req);
        res.send('Los datos enviados son invalidos');
    });
router.get('/cerrarsesion', (req,res, next)=>{
        req.logout();
        res.redirect('/api');
});
router.post('/registro',  body('Correo_cliente').isEmail().withMessage('Formato de correo inválido'), body('Contrasenia')
            .isLength({min:8}).withMessage('La longitud mínima de la contraseña es de 8 caracteres'), body('Nom_cliente')
            .isLength({min:3}).withMessage('La longitud mínima del nombre es de 3 caracteres'),
            body('Correo_cliente')
            .custom(
                value => {
                    return Cliente.findOne({
                        where: {
                            Correo_cliente: value,
                        }
                    }).then(data => {
                        if(data){
                            return Promise.reject('El correo ya se encuentra en uso');
                        }
                    });
                }
            ).withMessage('El correo ya se encuentra en uso'), controladorlogin.regristrarCliente);

router.post('/enviar', controladorlogin.enviarCodigo);
router.post('/verificar', controladorlogin.envioCodigo);
router.put('/recuperar/:id', body('Contrasenia').isLength({min: 8}).withMessage("Contraseña debe tener mínimo 8 caracteres"), controladorlogin.actualizarContrasenia);
function validarAutenticado(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/api');
};
 /**/
module.exports=router;