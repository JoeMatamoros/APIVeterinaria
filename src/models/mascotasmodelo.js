const  Sequelize  = require('sequelize');
const db=require('../config/conexionbd');
const Mascotas=db.define(
    "mascotas",
    {
        Id_mascotas:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Nom_mascotas:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        Edad:{
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        Peso:{
            type: Sequelize.STRING(45),
            allowNull: true,
        },
        Altura:{
            type: Sequelize.STRING(45),
            allowNull: true,

        },
        Id_raza:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Id_cliente:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Activa:{
            type: Sequelize.STRING(3),
            allowNull: true
        }
    },
    {
        tableName: "mascotas",
        timestamps: false,
    }
);

module.exports=Mascotas;