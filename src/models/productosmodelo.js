const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  productos = db.define(
"productos",
{
 Id_producto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

 },
 Descrip_producto: {
    type: Sequelize.STRING(70),
    alloNull: false

 },
 Expiracion: {
    type: Sequelize.DATE, //hay que cambiarlo pk no se la variable
    alloNull: true

 },
 Cantidad: {

    type: Sequelize.INTEGER,
    alloNull: true
 },
 Id_marca: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    alloNull: false
 },
 Activo: {
    type: Sequelize.STRING(3),//hay que cambiarlo pk no se la variable
    alloNull: true
 }

},
{
    tableName: "productos",
    timestamps: false
}
);
module.exports = productos