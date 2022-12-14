import { RowDataPacket } from 'mysql2/promise';
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

export default { getAllOrders };