import express from 'express';
import ordersControllers from '../controllers/orders.controllers';
import { validateToken, validateProductsIds } from '../middleware/validateOrders';

const orderRoutes = express.Router();

orderRoutes.get('/', ordersControllers.getAllOrders);
orderRoutes.post('/', validateToken, validateProductsIds, ordersControllers.createOrder);

export default orderRoutes;