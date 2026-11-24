import { Pool, types } from 'pg';

// Por defecto pg devuelve BIGINT como texto. Aqui se convierte a numero.
types.setTypeParser(types.builtins.INT8, Number);

export const pool = new Pool({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  database: process.env.DB_NAME ?? 'parcial',
  user: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? ''
});

// Sin este listener, un error en una conexion inactiva terminaria el proceso.
pool.on('error', (error) => {
  console.error('Error inesperado en la conexion con PostgreSQL:', error);
});
