import { Request, Response } from 'express';
import productsServices from '../services/products.services';

async function getAll(req: Request, res: Response) {
  const products = await productsServices.getAll();
  return res.status(200).json(products);
}

async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productsServices.createProduct(name, amount);
  return res.status(201).json(newProduct);
}

export default { getAll, createProduct };