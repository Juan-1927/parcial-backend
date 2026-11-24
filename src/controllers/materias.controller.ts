import { type Request, type Response } from 'express';
import { MateriasModel } from '../models/materias.model.js';

export const obtenerMaterias = async (_req: Request, res: Response) => {
  const materias = await MateriasModel.obtenerTodos();

  res.json(materias);
};
