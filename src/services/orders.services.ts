import ordersModels from '../models/orders.models';
import { TOrder } from '../types';

async function getAllOrders(): Promise<TOrder[]> {
  const result = await ordersModels.getAllOrders();
  return result;
}

export default { getAllOrders };