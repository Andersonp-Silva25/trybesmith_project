import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TOrder } from '../types';
import connection from './connection';

async function getAllOrders(): Promise<TOrder[]> {
  const [rows] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds
      FROM Trybesmith.orders AS O 
      INNER JOIN Trybesmith.products AS P ON O.id = P.order_id 
      GROUP BY O.id;`,
  );

  return rows;
}

async function createOrder(userId: number, productsIds: number[]): Promise<TOrder> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?);', 
    [userId],
  );
  await Promise.all(
    productsIds.map((id) => connection.execute(
      'UPDATE Trybesmith.products SET order_id = (?) WHERE id = (?);',
      [insertId, id],
    )),
  );
  return { userId, productsIds };
}

export default { getAllOrders, createOrder };