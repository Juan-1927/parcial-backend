import 'dotenv/config';
import { pool } from './src/config/database.js';

try {
  await pool.query('SELECT 1');
  console.log(`Conectado a PostgreSQL (base de datos: ${process.env.DB_NAME})`);
} catch (error) {
  console.error('No se pudo conectar a PostgreSQL:', error);
  process.exit(1);
}
