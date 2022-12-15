import express from 'express';
import productsControllers from '../controllers/products.controllers';
import { validateProductName, validateProductAmount } from '../middleware/validateProduct';

const productsRouters = express.Router();

productsRouters.get('/', productsControllers.getAll);
productsRouters.post(
  '/', 
  validateProductName, 
  validateProductAmount, 
  productsControllers.createProduct,
);

export default productsRouters;