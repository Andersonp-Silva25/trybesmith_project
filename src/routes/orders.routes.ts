import express from 'express';
import ordersControllers from '../controllers/orders.controllers';

const orderRoutes = express.Router();

orderRoutes.get('/', ordersControllers.getAllOrders);

export default orderRoutes;