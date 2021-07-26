const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  ordenes = db.define(
"ordenes",
{
Id_orden: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

},
Anotaciones: {
    type: Sequelize.STRING(200),
    alloNull: true,
},
Id_cliente:{
    type: Sequelize.INTEGER,
    foreignKey: true,
    alloNull: false
},
Subtotal: {
    type: Sequelize.DOUBLE,
    alloNull: false,

},
Impuestos:{

    type: Sequelize.DOUBLE,
    alloNull: true,
},
Descuento:{
    type: Sequelize.DOUBLE,
    alloNull: true,
}
},
{
    tableName: "ordenes",
    timestamps: false
}
);
module.exports = ordenes;