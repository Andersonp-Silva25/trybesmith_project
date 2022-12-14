import productsModels from '../models/products.models';
import { TProduct } from '../types';

async function getAll(): Promise<TProduct[]> {
  const result = await productsModels.getAll();
  return result;
}

async function createProduct(name: string, amount: string): Promise<TProduct> {
  const id = await productsModels.createProduct(name, amount);
  const newProduct: TProduct = { id, name, amount };
  return newProduct;
}

export default { getAll, createProduct };