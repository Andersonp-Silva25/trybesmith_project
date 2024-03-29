import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

async function getAll(): Promise<TProduct[]> {
  const [rows] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );

  return rows;
}

async function createProduct(name: string, amount: string): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO  Trybesmith.products (name, amount) VALUES (?, ?);', 
    [name, amount],
  );

  return insertId;
}

export default { getAll, createProduct };