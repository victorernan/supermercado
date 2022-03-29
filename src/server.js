const mongo = require("mongoose");
const url = 'http://localhost:27017/productos';
const path = require('path');
const bodyParser = require('body-parser')

//la conexion a la base de datos trabaja con promesas

var db = mongo.connect(url, function(err, resp){
    if(err)console.log(err);
    else console.log("Conexion a " + db + resp);
});
