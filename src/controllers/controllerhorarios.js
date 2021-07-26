const Horario = require('../models/horariosmodelo');

exports.listarHorarios = async (req, res) =>{
    const listarHorarios = await Horario.findAll();
    if(listarHorarios){
        res.json(listarHorarios);
    } else{
        res.send('No hay horarios');

    }
}