const Sequelize = require('sequelize');
const db=require('../config/conexionbd');
const bcrypt = require('bcrypt');
const Clientes=db.define(
    "clientes",
    {
        Id_cliente:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        Nom_cliente:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        Tel_cliente:{
            type: Sequelize.STRING(12),
            allowNull: false,

        },
        Correo_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        Contrasenia:{
            type: Sequelize.STRING(250),
            allowNull: false,

        },
        Direc_cliente:{
            type: Sequelize.STRING(250),
            allowNull: false,

        },
        Activo: {
            type: Sequelize.STRING(3),
            allowNull: true
        }
    },
    {
        tableName: "clientes",
        timestamps: false,
        hooks : {
            beforeCreate(clientes) {
              const hash = bcrypt.hashSync(clientes.Contrasenia, 10);
              clientes.Contrasenia = hash;
            },
            beforeUpdate(clientes){
                const hash = bcrypt.hashSync(clientes.Contrasenia, 10);
                clientes.Contrasenia = hash;
            }
          }
    }
);
Clientes.prototype.verificarContrasena = (con, com)=>{
    return bcrypt.compareSync(con, com);
  }

module.exports=Clientes;