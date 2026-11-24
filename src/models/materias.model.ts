import { pool } from '../config/database.js';

export interface Materia {
  id: number;
  nombre: string;
  nrc: string;
  docente: string;
}

export class MateriasModel {
  static async obtenerTodos(): Promise<Materia[]> {
    const resultado = await pool.query(
      `SELECT id, nombre, nrc, docente
       FROM materias
       ORDER BY id`
    );

    return resultado.rows;
  }
}
