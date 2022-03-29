
const mongoose = require("mongoose");
const URI = 'mongodb://localhost:27017/supermercado';

mongoose.connect(URI)
            .then(x => console.log("Connected to ddbb"))
            .catch(err => console.log(err));

