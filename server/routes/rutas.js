
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