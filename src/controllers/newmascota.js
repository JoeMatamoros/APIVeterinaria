const Mascotas=require('../models/mascotasmodelo');

exports.agregar=async(req, res)=>{
    const {Nom_mascotas, Peso, Altura, Id_raza, Id_cliente, Edad}=req.body;
    var mensajes=[];
    if (!Nom_mascotas){
        mensajes.push({mensaje:"Ingrese el nombre de la mascota"});
    }
    if (!Peso){
        mensajes.push({mensaje:"Ingrese el peso de la mascota"});
    }
    if (!Altura){
        mensajes.push({mensaje:"Ingrese la altura de la mascota"});
    }
    if (!Id_raza){
        mensajes.push({mensaje:"Ingrese el ID raza de la mascota"});
    }
    if (!Id_cliente){
        mensajes.push({mensaje:"Ingrese el ID Cliente"});
    }
    if (!Edad){
        mensajes.push({mensaje:"Ingrese la edad de su mascota"});
    }
    if (mensajes.length){
        res.status(400).json(mensajes);
    }
    else{
        var newmascota=await Mascotas.create({
            Nom_mascotas: Nom_mascotas,
            Edad: Edad,
            Peso: Peso,
            Altura: Altura,
            Id_raza: Id_raza,
            Id_cliente: Id_cliente
        });

        res.json(newmascota);
    }
};

exports.eliminarMascota = async(req, res) =>{
    const {id} = req.params;
    const {Activo} = req.body;
    var mensajes = {
        mensaje: "",
        data: []
    };

    if(Activo){
        const eliminar = await Mascotas.update({
            Activa: Activo
        },{
            where:{
                Id_mascotas: id
            }
        });

        if(eliminar){
            mensajes.mensaje="Mascota eliminada correctamente";
        }else{
            mensajes.mensaje="Errror al eliminar la mascota";
        }
        res.status(200).json(mensajes);
    }
}