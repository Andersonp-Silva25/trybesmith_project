import { decodeToken } from '../auth/jwtFunctions';
import ordersModels from '../models/orders.models';
import { TOrder, TToken } from '../types';

async function getAllOrders(): Promise<TOrder[]> {
  const result = await ordersModels.getAllOrders();
  return result;
}

async function createOrder(token: string, productsIds: number[]): Promise<TOrder> {
  const decode = decodeToken(token);
  const { id } = decode as TToken;
  const result = await ordersModels.createOrder(id as number, productsIds);
  return result;
}

export default { getAllOrders, createOrder };