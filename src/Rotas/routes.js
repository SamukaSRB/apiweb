const express = require('express');
const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');


const routes = express.Router();
 
//Rotas simples
//Rota para salvar os dados
routes.post('/users', UserController.store);
//Rotas para apresentar todos os dados
routes.get('/users', UserController.index);
//Rotas para apresentar os dados por indentificador único
routes.get('/users/:id', UserController.show);
//Rotas para atualizar os dados
routes.put('/users/:id',UserController.update);
//Rota para apagar um registro por id na base de dados
routes.delete('/users/:id', UserController.destroy); 

//Rotas encadeada

//Rotas para apresentar todos os dados
routes.get('/users/:user_id/addresses', AddressController.index);
//Rotas para apresentar os dados por indentificador único
routes.post('/users/:user_id/addresses', AddressController.store);
//Rotas para atualizar os dados

//Rota para apagar um registro por id na base de dados



//Rotas simples
routes.post('/category', CategoryController.store);
routes.get('/category', CategoryController.index);
routes.get('/category/:id', CategoryController.show);
//Rotas simples

//Rotas para apresentar todos os dados
routes.post('/product',ProductController.store);
//Rotas para apresentar todos os dados
routes.get('/product/:id', ProductController.index);
//Rotas para apresentar os dados por indentificador único
routes.get('/product/:id', ProductController.show);
//Rotas para atualizar os dados
routes.put('/product/:id',ProductController.update);
//Rota para apagar um registro por id na base de dados
routes.delete('/product/:id', ProductController.destroy); 

//Rotas encadeada
routes.get('/product',  ProductController.index);
//Rotas para apresentar todos os dados
routes.get('/product/:id/category',  ProductController.index);
//Rotas para apresentar todos os dados
routes.get('/product/:id/category',  ProductController.show);
//Rotas para apresentar os dados por indentificador único
routes.post('/product/:id/category',   ProductController.store);
//Rotas para atualizar os dados
routes.put('/product/:id/category',  ProductController.update);
//Rota para apagar um registro por id na base de dados
routes.delete('/product/:id/category', ProductController.destroy); 

module.exports = routes;


//Aqui fica as rotas de acesso 