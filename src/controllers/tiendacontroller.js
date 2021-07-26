const Productos = require('../models/productosmodelo');
const Marcas = require('../models/marcasmodelo');
const TipoProducto = require('../models/tipoproductomodelo');
const Cloudinary = require('cloudinary');
const Moment = require('moment');
const { validationResult } = require('express-validator');

Cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY ,
    api_secret: process.env.CLOUD_API_SECRET ,
    secure: true
});

exports.listaTipoProducto= async(req, res) =>{

    var mensajes = {
        mensaje: "",
        data: []
    };

    const buscar = await TipoProducto.findAll();

    if(buscar){
        mensajes.mensaje="Productos encontrados";
        mensajes.data = buscar;
        res.status(200).json(mensajes);

    }else{
        mensajes.mensaje="Fallaste panita";
        res.status(200).json(mensajes);
    }

};

exports.listaProducto = async(req, res)=>{
    var mensajes = {
        mensaje: "",
        data: []
    };

    const buscar = await Productos.findAll();

    if(buscar){
        mensajes.mensaje="Productos encontrados";
        mensajes.data = buscar;
        res.status(200).json(mensajes);

    }else{
        mensajes.mensaje="Fallaste panita";
        res.status(200).json(mensajes);
    }
};


exports.llamarImagen = async(req, res)=>{

    const imagen = Cloudinary.image("fysr3hw33shdkr21zrld.png");
    //devuelve una etiqueta html img
    res.status(200).send(imagen);
};

exports.facturar = async(req, res) => {
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
        const {nombre, numtarjeta, fecha, cvc} = req.body;
        console.log(fecha);
        var hoy = Moment().format('YYYY-MM-DD');
        if(Moment(fecha+'-30').isAfter(hoy)){
            mensajes.mensaje = "Pedido Facturado";
            mensajes.data = req.body;
        }else{
            mensajes.mensaje = "Fallaste Panita";
        }

        res.status(200).json(mensajes);
   }
}