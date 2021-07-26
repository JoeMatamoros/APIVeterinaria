const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const TipoProductos = bd.define(
    "tipo_producto",
    {
        Id_tipo_producto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Descrip_tipo_producto: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tipo_producto",
        timestamps: false
    }
);

module.exports = TipoProductos;