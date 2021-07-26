const Sequelize = require('sequelize');
const base = new Sequelize(
    process.env.MYSQL_DB , //base de datos
    process.env.MYSQL_USUARIO , //usuario
    process.env.MYSQL_CONTRASENA , //contraseña
    {
        host: 'localhost', //servidor
        dialect: 'mysql', //DBMS
        port: '3306', //puerto
    },
);

module.exports = base;