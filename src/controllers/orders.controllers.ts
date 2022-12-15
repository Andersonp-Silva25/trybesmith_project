import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

async function getAllOrders(_req: Request, res: Response) {
  const orders = await ordersServices.getAllOrders();
  return res.status(200).json(orders);
}

async function createOrder(req: Request, res: Response) {
  const { productsIds } = req.body;
  const { authorization: token } = req.headers;  
  const newOrder = await ordersServices.createOrder(token as string, productsIds);
  return res.status(201).json(newOrder);
}

export default { getAllOrders, createOrder };