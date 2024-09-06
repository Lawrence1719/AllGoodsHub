import express from 'express';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

// Use the product routes
app.use('/api', productRoutes);

export default app;
