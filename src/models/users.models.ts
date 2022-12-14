import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

async function createUser(user: TUser): Promise<void> {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [user.username, user.vocation, user.level, user.password],
  );
}

export default { createUser };