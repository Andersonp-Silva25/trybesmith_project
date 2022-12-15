import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

async function createUser(user: TUser): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [user.username, user.vocation, user.level, user.password],
  );

  return insertId;
}

async function getByUserAndPass({ username, password }: TUser): Promise<object> {
  const [user] = await connection.execute<RowDataPacket[] & TUser>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [username, password],
  );
  
  return user[0];
}

export default { createUser, getByUserAndPass };