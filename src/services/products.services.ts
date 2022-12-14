import productsModels from '../models/products.models';
import { TProduct } from '../types';

async function getAll(): Promise<TProduct[]> {
  const result = await productsModels.getAll();
  return result;
}

async function createProduct(name: string, amount: string) {
  const result = await productsModels.createProduct(name, amount);
  return result;
}

export default { getAll, createProduct };