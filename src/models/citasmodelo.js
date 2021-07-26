const Sequelize  = require('sequelize');
const db=require('../config/conexionbd');
const Citas=db.define(
    "citas",
    {
        Id_cita:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Fecha_cita:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        Id_tipo_cita:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Id_cliente:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false

        },
        Id_empleado:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false
        }

    },
    {
        tableName: "citas",
        timestamps: false,
    }
);

module.exports=Citas;