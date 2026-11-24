import { Router } from 'express';

import { obtenerMaterias } from '../controllers/materias.controller.js';

const router = Router();

router.get('/', obtenerMaterias);

export default router;
