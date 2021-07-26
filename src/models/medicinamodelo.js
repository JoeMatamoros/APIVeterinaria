const  Sequelize  = require('sequelize');
const db=require('../config/conexionbd');
const Medicina=db.define(
    "medicinas",
    {
        Id_medicina:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Descrip_medicina:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
    },
    {
        tableName: "medicina",
        timestamps: false,
    }
);

module.exports=Medicina;