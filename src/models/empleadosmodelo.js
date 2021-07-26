const  Sequelize  = require('sequelize');
const db=require('../config/conexionbd');
const Empleados=db.define(
    "empleados",
    {
        Id_empleado:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Nom_empleado:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        Correo_empleado:{
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        Tel_empleado:{
            type: Sequelize.STRING(12),
            allowNull: false,

        },
        Id_puesto:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false

        },
        Genero:{
            type: Sequelize.STRING(1),
            allowNull: false,
        },
        Id_horario:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Fecha_contratacion:{
            type: Sequelize.DATE,
            allowNull: false,

        },
        Fecha_despido:{
            type: Sequelize.DATE,
            allowNull: false,

        },
        Activo:{
            type: Sequelize.STRING(3),
            allowNull: true
        },

    },
    {
        tableName: "empleados",
        timestamps: false,
    }
);

module.exports=Empleados;