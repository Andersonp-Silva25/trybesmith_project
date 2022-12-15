import express from 'express';
import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';
import orderRoutes from './routes/orders.routes';
import loginRouters from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouters);
app.use('/users', usersRouters);
app.use('/orders', orderRoutes);
app.use('/login', loginRouters);

export default app;
