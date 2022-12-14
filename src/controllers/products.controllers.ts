import { Request, Response } from 'express';
import productsServices from '../services/products.services';

async function getAll(req: Request, res: Response) {
  const products = await productsServices.getAll();
  return res.status(200).json(products);
}

export default { getAll };