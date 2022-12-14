import express from 'express';
import productsRouters from './routes/products.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouters);

export default app;
