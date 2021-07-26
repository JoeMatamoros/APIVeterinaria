const passport = require('passport');
const Clientes = require('../models/clientesmodelo');
const EstrategiaLocal = require('passport-local').Strategy;

passport.serializeUser((cliente, done)=>{
    console.log(cliente);
    done(null, cliente.Id_cliente);
});
passport.deserializeUser(async (id, done)=>{
    console.log(id);
    const cliente = await Clientes.findByPk(id);
    done(null, cliente);
});
passport.use('iniciosesion', new EstrategiaLocal({
    usernameField:'correo',
    passwordField: 'contrasenia',
    passReqToCallback: true,
}, async (req, correo, contrasenia, done)=>{
    const cliente = await Clientes.findOne({where:{Correo_cliente: correo, Activo: "ACT", }});
    if (cliente.verificarContrasena(contrasenia,cliente.Contrasenia)){
        console.log('Contrasena correcta');
        done(null, cliente);
    } else{
        console.log('Contrasena erronea '+ cliente.contrasena);
        done(null, false);
    }
}));