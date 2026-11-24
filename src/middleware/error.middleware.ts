import type { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  // No se envia err.message al cliente porque puede revelar detalles de la base de datos.
  res.status(500).json({
    message: 'Error interno del servidor'
  });
};
