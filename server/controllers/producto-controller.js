//consultas a la base de datos
const mongoose = require('mongoose');
const express = require('express');

const produtoController = {};

//permite acceder a los métodos de mongo 
const productos = require('../models/products');
const { async } = require('rxjs');


produtoController.getProducts = async  (req, res) =>{
    const allproducts = await productos.find()
    res.json(allproducts);
}

produtoController.createProduct = async  (req, res) =>{
    const guardar = new productos(req.body);
    await guardar.save();
    res.json({
        'status': 'Producto guardado'
    });
}

produtoController.getOneProduct = async (req, res) =>{
    //recoge los parametros que trae la url
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const buscarproductoId = await productos.findById(req.params.id)
        res.json(buscarproductoId);
    }
}

produtoController.deleteProduct = async (req, res) =>{
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        let borrarProducto = await productos.findByIdAndRemove(id); 
        res.json({
            'status': 'Producto eliminado'
        });
    }
}

produtoController.updateProduct = async (req, res) =>{
    const {id} = req.params;
    const newProduct = {
        title: req.body.title,
        type : req.body.type,
        description : req.body.description,
        filename: req.body.filename,
        height: req.body.height,
        width : req.body.width,
        price : req.body.price,
        rating : req.body.rating
    };  
    await productos.findByIdAndUpdate(id, {$set: newProduct }, {new : true});
    res.json(newProduct);
}

module.exports = produtoController;

//estas funciones son instanciadas en el archivo que define las
//rutas que van al servidor (rutas.js)
//a su vez, index.js llama al archivo rutas

//request params y request body
// cuando requerimos solo un parametrp llamamos al  request params
// por ejemplo getone, deleteone 
// pero vamos a hacer un post o crear un nuevo campo
// vamos a necesitar request body, porque en el cuerpo viene toda la info 
// y no en la url