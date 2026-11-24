// Debe ser el primer import: database.ts necesita las variables de .env al cargarse.
import 'dotenv/config';

import app from './app.js';
import { pool } from './src/config/database.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await pool.query('SELECT 1 FROM materias LIMIT 1');
    await pool.query('SELECT 1 FROM horarios LIMIT 1');
    console.log(`Conectado a PostgreSQL (base de datos: ${process.env.DB_NAME})`);
  } catch (error) {
    console.error(
      'No se pudo usar la base de datos. Revisa los datos de .env y que hayas ejecutado database/schema.sql:',
      error
    );
    process.exit(1);
  }

  app.listen(PORT, (error) => {
    if (error) {
      console.error(`No se pudo iniciar la API en el puerto ${PORT}:`, error.message);
      process.exit(1);
    }

    console.log(`API ejecutandose en http://localhost:${PORT}`);
  });
}

startServer();
