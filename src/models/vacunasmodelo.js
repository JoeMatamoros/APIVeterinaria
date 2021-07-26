const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const Vacunas = bd.define(
    "vacunas",
    {
        Id_vacuna: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Descrip_vacuna: {
            type: Sequelize.STRING(60),
            allowNull: false
        }
    },
    {
        tableName: "vacunas",
        timestamps: false
    }
);

module.exports = Vacunas;