import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

async function createUser(user: TUser): Promise<void> {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [user.username, user.vocation, user.level, user.password],
  );
}

async function getByUserAndPass({ username, password }: TUser): Promise<TUser | number> {
  const [user] = await connection.execute<RowDataPacket[] & TUser>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [username, password],
  );
  if (!user.length) return user.length;
  return user;
}

export default { createUser, getByUserAndPass };