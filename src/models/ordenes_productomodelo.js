const Sequelize = require('sequelize');
const db=require('../config/conexionbd');
const  ordenes_producto = db.define(
"ordenes_producto",
{
Id_orden:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    foreignKey: true,
    allowNull: false
},
Id_producto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    foreignKey: true,
    allowNull: false
},
Cantidad: {
    type: Sequelize.STRING(45),
    alloNull: false
}
},
{
    tableName: "ordenes_producto",
    timestamps: false
}
);
module.exports = ordenes_producto;