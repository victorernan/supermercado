<<<<<<< HEAD
//hay que decirle a express que necesita a mongoose para conectarse a la bbdd
//al mismo tiempo se va a encargar del modelo d la bbdd
const mongoose = require("mongoose");
const URI = 'mongodb://localhost:27017/supermercado';

mongoose.connect(URI)
            .then(x => console.log("Connected to ddbb"))
            .catch(err => console.log(err));

=======
//hay que decirle a express que necesita a mongoose para conectarse a la bbdd
//al mismo tiempo se va a encargar del modelo d la bbdd
const mongoose = require("mongoose");
const URI = 'mongodb://localhost:27017/supermercado';

mongoose.connect(URI)
            .then(x => console.log("Connected to ddbb"))
            .catch(err => console.log(err));

>>>>>>> 58e461a196c1c5043ad8eb6b292e4534a10fece1
module.exports = mongoose;