import { pool } from '../config/database.js';

export interface Horario {
  id: number;
  materia: string;
  dia: string;
  inicio: string;
  fin: string;
}

export class HorariosModel {
  static async obtenerTodos(): Promise<Horario[]> {
    const resultado = await pool.query(
      `SELECT id, materia, dia, inicio, fin
       FROM horarios
       ORDER BY id`
    );

    return resultado.rows;
  }
}
