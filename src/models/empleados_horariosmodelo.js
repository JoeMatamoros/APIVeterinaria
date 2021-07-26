const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  empleados_horarios = db.define(
"empleados_horarios",
{
    Id_empleado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    Id_horario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    }
},
 {
     tableName: "empleados_horarios",
     timestamps: false
 }

);
module.exports = empleados_horarios;