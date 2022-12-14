import productsModels from '../models/products.models';
import { TProduct } from '../types';

async function getAll(): Promise<TProduct[]> {
  const result = await productsModels.getAll();
  return result;
}

export default { getAll };