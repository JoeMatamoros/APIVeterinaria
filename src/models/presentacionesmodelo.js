const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  presentaciones = db.define(
"presentaciones",
{
Id_presentaciones: {

    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
Descrip_presentacion: {
    type: Sequelize.STRING(50),
    alloNull: false
}
},
{
    tableName: "presentaciones",
    timestamps: false
}
);
module.exports = presentaciones;