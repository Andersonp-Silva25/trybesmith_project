import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

async function getAllOrders(_req: Request, res: Response) {
  const orders = await ordersServices.getAllOrders();
  return res.status(200).json(orders);
}

export default { getAllOrders };