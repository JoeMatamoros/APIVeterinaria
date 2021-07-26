const  Sequelize  = require('sequelize');
const db=require('../config/conexionbd');
const Marcas=db.define(
    "marcas",
    {
        Id_marca:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Nom_marca:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },

    },
    {
        tableName: "marcas",
        timestamps: false,
    }
);

module.exports=Marcas;