import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create a connection pool
const pool = new Pool({
  user: process.env.DB_USER,        // DB username
  host: process.env.DB_HOST,        // DB host, e.g., localhost
  database: process.env.DB_NAME,    // Database name
  password: process.env.DB_PASSWORD,// Database password
  port: parseInt(process.env.DB_PORT || '5432'), // Port number
});

// Export the query method for querying the database
export const query = (text: string, params?: any[]) => pool.query(text, params);

