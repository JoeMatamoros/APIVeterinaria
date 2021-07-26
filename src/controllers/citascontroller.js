const Mascotas =require('../models/mascotasmodelo');
const TipoCitas = require('../models/tipocitamodelo');
const HoraEmpleados = require('../models/empleados_horariosmodelo');
const Horas = require('../models/horariosmodelo');
const Citas = require('../models/citasmodelo');
const Moment = require('moment');

exports.general = async(req, res)=>{
    const {id} = req.params

    const mascotas=await Mascotas.findAll({
        where:{
            Id_cliente: id,
            Activa: "ACT"
        }
    });

    if(mascotas){
        res.json(mascotas);
    }
    else{
        res.send("No existe ninguna mascota registrada");
    }
};

exports.listaHorarios = async(req, res)=>{
    const {id} = req.params
    const bushoras = Array();
    var i = 0;
    const hora = await HoraEmpleados.findAll({
        where:{
            Id_empleado: id
        }
    });

   if(hora){
       console.log(i);
        while(i<hora.length){
            const descripciones = await Horas.findAll({
                where:{
                    Id_horario: hora[i].Id_horario
                }
            });
            if(descripciones){
                bushoras[i]=descripciones;
            }else{
                res.send("Horas no disponibles");
            }
            i++;
        }

        res.json(bushoras);
    }
    else{
        res.send("No hay doctores disponibles");
    }
};

exports.listaTipoCitas = async(req, res) => {
    const tipocita = await TipoCitas.findAll();

    if(tipocita){
        res.json(tipocita);
    }
    else{
        res.send("No existe ningún tipo de cita registrado");
    }
}

exports.agregar = async(req, res)=>{
    const {Fecha_cita, Id_tipo, Id_cliente, Id_empleado}=req.body;
    var mensajes=[];
    if (!Fecha_cita){
        mensajes.push({mensaje:"seleccione una fecha"});
    }
    if(!Id_tipo){
        mensajes.push({mensaje:"Seleccione el tipo de cita que desea"});
    }
    if(!Id_cliente){
        mensajes.push({mensaje:"Seleccione el tipo de cita que desea"});
    }
    if(!Id_empleado){
        mensajes.push({mensaje:"No se ha asignado ningún doctor"});
    }
    if (mensajes.length){
        res.status(400).json(mensajes);
    }
    else{
        var hoy = Moment().format('YYYY-MM-DD');
        if(Moment(Fecha_cita).isAfter(hoy)){
            var newcita = await Citas.create({
                Fecha_cita: Fecha_cita,
                Id_tipo_cita: Id_tipo,
                Id_cliente: Id_cliente,
                Id_empleado:Id_empleado
            });
            res.json(newcita);
        }else{
            res.json("La fecha de la cita debe ser mayor que la de hoy");
        }
    }
};


