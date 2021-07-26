const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const VacunasMascotas = bd.define(
    "vacunas_mascotas",
    {
        Id_vacuna: {
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
        Cantidad_minima: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "vacunas_mascotas",
        timestamps: false
    }
);

module.exports = VacunasMascotas;