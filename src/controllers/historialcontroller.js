const Mascotas = require('../models/mascotasmodelo');
const TipoMascota = require('../models/tipomascotasmodelo');
const Medicinas = require('../models/medicinas_mascotasmodelo');
const DetalleVacunas = require('../models/vacunasmodelo');
const DetalleMedicinas = require('../models/medicinamodelo');
const Raza = require('../models/razamodelo');
const VacunasMascotas = require('../models/vacunasmascotasmodelo');

exports.detallesMascota = async(req, res) =>{
    const {id} = req.params;
    var i = 0;
    const busvacunas = Array();
    const busmedicinas = Array();
    const busDetalles = [];
    const detalles = await Mascotas.findOne({
        where:{
            Id_mascotas: id,
            Activa: "ACT"
        }
    });

    if(detalles){
        busDetalles.push(detalles.Nom_mascotas);
        const raza = await Raza.findOne({
            where:{
                Id_raza: detalles.Id_raza
            }
        });

        if(raza){
            const tipo = await TipoMascota.findOne({
                where:{
                    Id_tipo_mascotas: raza.Id_tipo_mascotas
                }
            });

            if(tipo){
                console.log(tipo.Descrip_tipo);
                console.log(raza.Descrip_raza);
                busDetalles.push(tipo.Descrip_tipo);
                busDetalles.push(raza.Descrip_raza);
            }else{
                console.log("Error al procesar los tipos");
            }
        }
        const vacuna = await VacunasMascotas.findAll({
            where:{
                Id_mascotas: id
            }
        });

        if(vacuna){
            i=0;
            while(i<vacuna.length){
                const descripciones = await DetalleVacunas.findAll({
                    where:{
                        Id_vacuna: vacuna[i].Id_vacuna
                    }
                });
                if(descripciones){
                    busvacunas[i]=descripciones;
                }else{
                    console.log("Vacunas no disponibles");
                }
                i++;
            }
        }else{
            console.log("Su mascota no tinene ninguna vacuna");
        }

        const medicinas = await Medicinas.findAll({
            where:{
                Id_mascotas: id
            }
        });

        if(medicinas){
            i=0;
            while(i<medicinas.length){
                const descripciones2 = await DetalleMedicinas.findAll({
                    where:{
                        Id_medicina: medicinas[i].Id_medicina
                    }
                });
                if(descripciones2){
                    busmedicinas[i]=descripciones2;
                }else{
                    res.send("Medicinas no disponibles");
                }
                i++;
            }
        }else{
            console.log("Su mascota no toma medicinas");
        }
        busDetalles.push(detalles.Edad);
        busDetalles.push(busvacunas);
        busDetalles.push(busmedicinas);
        busDetalles.push(detalles.Peso);
        busDetalles.push(detalles.Altura);
    }else{
        res.send("El animalito no está en nuestra base de datos");
    }

    res.json(busDetalles);

};