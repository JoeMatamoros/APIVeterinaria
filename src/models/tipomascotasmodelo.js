const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const TipoMascotas = bd.define(
    "tipo_mascotas",
    {
        Id_tipo_mascotas: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Descrip_tipo: {
            type: Sequelize.STRING(60),
            allowNull: false
        }
    },
    {
        tableName: "tipo_mascotas",
        timestamps: false
    }
);

module.exports = TipoMascotas;