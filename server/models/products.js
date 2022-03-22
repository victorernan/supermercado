//para definir los esquemas de datos
const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductosSchema = new Schema ({
    title: {type : String , require: true},
    type : {type : String , require: true},
    description : {type : String , require: true},
    filename : {type : String, require: true },
    height : {type : Number, require: true },
    width: {type : Number, require: true },
    price : {type : Number , require: true},
    rating : {type : Number , require: true},
});

//los datos ya están definidos, ahora hay que indicar que hay que guardar los datos en el BBDD
//module.exports => para poder usar este archivo en otras partes de la aplicacion
module.exports = mongoose.model('productos', ProductosSchema);

