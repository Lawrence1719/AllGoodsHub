import { Request, Response } from 'express';
import { query } from '../config/db';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
