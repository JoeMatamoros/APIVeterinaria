const Sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  puestos = db.define(
"puestos",
{
    Id_puesto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    Descrip_puesto:
    {
        type: Sequelize.STRING(50),
        alloNull: false
    }

},
{
    tableName: "puestos",
    timestamps: false
}
);
module.exports = puestos