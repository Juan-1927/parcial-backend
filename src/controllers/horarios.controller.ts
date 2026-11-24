import { type Request, type Response } from 'express';
import { HorariosModel } from '../models/horarios.model.js';

export const obtenerHorarios = async (_req: Request, res: Response) => {
  const horarios = await HorariosModel.obtenerTodos();

  res.json(horarios);
};
