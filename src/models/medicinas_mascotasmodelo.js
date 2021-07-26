const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  medicinas_mascotas = db.define(
"medicinas_mascotas",
{
 Id_medicina:
 {
    type: Sequelize.INTEGER,
    primaryKey: true,
    foreignKey: true,
    allowNull: false
 },
 Id_mascotas: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    foreignKey: true,
    allowNull: false
 },
    Cantidad: {
        type: Sequelize.INTEGER,
        alloNull: false,
    }
},
{
    tableName: "medicinas_mascotas",
    timestamps: false
}
);
module.exports = medicinas_mascotas;