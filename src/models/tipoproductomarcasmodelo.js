const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const TipoProductoMarca = bd.define(
    "tipo_producto_marcas",
    {
        Id_tipo_producto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: tipo_producto,
                key: 'Id_tipo_producto',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        Id_marca: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            foreignKey: true,
            allowNull: false
        }
    },
    {
        tableName: "tipo_producto_marcas",
        timestamps: false
    }
);

module.exports = TipoProductoMarca;