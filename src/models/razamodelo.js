const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const Razas = bd.define(
    "raza",
    {
        Id_raza: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Descrip_raza: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Id_tipo_mascotas: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    },
    {
        tableName: "raza",
        timestamps: false
    }
);

module.exports = Razas;