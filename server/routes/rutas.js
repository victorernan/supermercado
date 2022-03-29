<<<<<<< HEAD
//las rutas que se van a usar para hacer las peticiones a la base de datos

const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const productoController = require('../controllers/producto-controller');

//rutas que tiene definido nuestro servidor
//las rutas no se distinguen, pero al ser llamadas desde 
//el service van a ser reconocibles 
routes.get('/', productoController.getProducts)
routes.post('/', productoController.createProduct)
routes.get('/:id', productoController.getOneProduct)
routes.put('/:id', productoController.updateProduct)
routes.delete('/:id', productoController.deleteProduct)

=======
//las rutas que se van a usar para hacer las peticiones a la base de datos

const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const productoController = require('../controllers/producto-controller');

//rutas que tiene definido nuestro servidor
//las rutas no se distinguen, pero al ser llamadas desde 
//el service van a ser reconocibles 
routes.get('/', productoController.getProducts)
routes.post('/', productoController.createProduct)
routes.get('/:id', productoController.getOneProduct)
routes.put('/:id', productoController.updateProduct)
routes.delete('/:id', productoController.deleteProduct)

>>>>>>> 58e461a196c1c5043ad8eb6b292e4534a10fece1
module.exports = routes;