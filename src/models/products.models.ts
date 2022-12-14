import { RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

async function getAll(): Promise<TProduct[]> {
  const [rows] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );

  return rows;
}

export default { getAll };