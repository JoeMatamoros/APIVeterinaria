const Clientes = require('../models/clientesmodelo');
const { validationResult } = require('express-validator');
const EnviarCorreo = require('../config/correo');

exports.lista= async(req, res) =>{

    var mensajes = {
        mensaje: "",
        data: []
    };

    const buscar = await Clientes.findAll();

    if(buscar){
        mensajes.mensaje="Holis";
        mensajes.data = buscar;
        res.status(200).json(mensajes);

    }else{
        //
        mensajes.mensaje="Fallaste panita";
        res.status(200).json(mensajes);
    }

};

exports.iniciarSesion = async(req, res)=> {
   const valida = validationResult(req);

    var mensajes = {
        mensaje: "",
        data: []
    };

    if(!valida.isEmpty()){
        mensajes.mensaje="Los datos ingresados no son válidos";
        mensajes.data= valida.array();
        return res.status(200).json(mensajes);
   }
        return next(req,mensajes);
};

exports.regristrarCliente = async (req, res) => {
    const valida = validationResult(req);

    var mensajes = {
        mensaje: "",
        data: []
    };

    if(!valida.isEmpty()){
        mensajes.mensaje="Los datos ingresados no son válidos";
        mensajes.data= valida.array();
        return res.status(200).json(mensajes);
   }else{
        const {Nom_cliente, Tel_cliente, Correo_cliente, Contrasenia, Direc_cliente} = req.body;

        if(Nom_cliente && Tel_cliente && Correo_cliente && Contrasenia && Direc_cliente){

            var agregarCliente = await Clientes.create({
                Nom_cliente: Nom_cliente,
                Tel_cliente: Tel_cliente,
                Correo_cliente: Correo_cliente,
                Contrasenia: Contrasenia,
                Direc_cliente: Direc_cliente
            });

            if(agregarCliente){
                mensajes.mensaje="Usuario agregado correctamente";
                res.status(200).json(mensajes);
            }else{
                mensajes.mensaje="Errror al agregar el usuario";
                res.status(200).json(mensajes);
            }
        }
        else{
            mensajes.mensaje="Faltan algunos datos necesarios";
            res.status(200).json(mensajes);
        }
   }
};

exports.enviarCodigo = async (req, res) =>{
    var mensajes = {
        mensaje: "",
        data: []
    };

    const {correo} = req.body;

    const buscar = await Clientes.findOne({
        where: {
            Correo_cliente: correo,
            Activo: "ACT"
        }
    });

    const data ={
        correo: buscar.Correo_cliente
    }

    EnviarCorreo.recuperarContrasena(data);
    res.send("Correo enviado");
}

exports.envioCodigo = async(req, res)=>{
    const codigo = req.body;

    EnviarCorreo.verificarCodigo(codigo);
    res.send("Codigo verificado")
}

exports.actualizarContrasenia = async (req, res) => {
    const valida = validationResult(req);
    var mensajes = {
        mensaje: "",
        data: []
    };

    if(!valida.isEmpty()){
        mensajes.mensaje="Los datos ingresados no son válidos";
        mensajes.data= valida.array();
        return res.status(200).json(mensajes);
   }else{

        const {id}=req.params;
        const {Contrasenia, Contrasenia2} = req.body;

        if(Contrasenia===Contrasenia2){
            var actualizarContra = await Clientes.update({
                Contrasenia: Contrasenia
            },
            {
                where:{
                    Id_cliente:id
                }
            });

            if(actualizarContra){
                mensajes.mensaje="Contraseña actualizada correctamente";
                res.status(200).json(mensajes);
            }else{
                mensajes.mensaje="Errror al actualizar la contraseña";
                res.status(200).json(mensajes);
            }
        }
        else{
            mensajes.mensaje="Las contraseñas no coinciden";
            res.status(200).json(mensajes);
        }
   }

};
