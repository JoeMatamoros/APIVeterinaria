const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const TipoCitas = bd.define(
    "tipo_cita",
    {
        Id_tipo_cita: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Descrip_tipo_cita: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Precio_cita: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    },
    {
        tableName: "tipo_cita",
        timestamps: false
    }
);

module.exports = TipoCitas;