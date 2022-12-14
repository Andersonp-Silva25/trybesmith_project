import express from 'express';
import productsControllers from '../controllers/products.controllers';

const productsRouters = express.Router();

productsRouters.get('/', productsControllers.getAll);
productsRouters.post('/', productsControllers.createProduct);

export default productsRouters;