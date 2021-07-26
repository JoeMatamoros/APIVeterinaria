const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const morgan = require('morgan');
require('dotenv').config();
require('./config/passport');
const passport=require('passport');
const session = require('express-session');
app.set('port', process.env.port || 3002);

app.use(morgan('dev'));
app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));

app.use(session({
    secret:'abcdefg',
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/login', require('./routes/loginroutes'));
app.use('/api', require('./routes/index'));
app.use('/api/tienda', require('./routes/tiendaroutes'));
app.use('/api/citas', require('./routes/citasroutes'));
app.use('/api/agregar', require('./routes/agregarroutes'));
app.use('/api/historial', require('./routes/historialroutes'));
app.use('/api/horarios', require('./routes/routehorario'));

app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado, en el puerto ${app.get('port')}`);
});
