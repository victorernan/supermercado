//Este archivo es fundamental: se declara el express y todos los elemetos de la app: bbdd, rutas...
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const {Mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
    //trackea todas las peticiones, cambios... que llegan desde el cliente
    app.use(morgan('dev'));
    //que el servidor entienda la informacion que le llega
    app.use(express.json()) //antes este modulo se llamaba bodyparser()
    app.use(cors());
    

//routes
const routes = require('./routes/rutas');
app.use('/api/productos', routes);

//launch server
app.listen(app.get('port'), () => { //está accediendo a la var que se definio en app.set
    console.log("Server is listening on port 3000");
});