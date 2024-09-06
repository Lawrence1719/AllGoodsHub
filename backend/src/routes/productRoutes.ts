import express from 'express';
import { getAllProducts } from '../controllers/productController';

const router = express.Router();

// Route to get all products
router.get('/products', getAllProducts);

export default router;
