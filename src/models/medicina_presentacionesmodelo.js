const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  medicina_presentaciones = db.define(
"medicina_presentaciones",
{
    Id_medicina: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    Id_presentacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    }
},
 {
     tableName: "medicina_presentaciones",
     timestamps: false
 }

);
module.exports = medicina_presentaciones;