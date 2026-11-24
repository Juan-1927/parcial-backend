import express from 'express';
import cors from 'cors';

import materiasRoutes from './src/routes/materias.routes.js';
import horariosRoutes from './src/routes/horarios.routes.js';
import { errorHandler } from './src/middleware/error.middleware.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API del parcial funcionando');
});

app.get('/api/v1/health', (_req, res) => {
  res.json({
    status: 'OK'
  });
});

app.use('/api/v1/materias', materiasRoutes);
app.use('/api/v1/horarios', horariosRoutes);

app.use(errorHandler);

export default app;
