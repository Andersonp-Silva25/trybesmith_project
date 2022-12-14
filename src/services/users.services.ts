import usersModels from '../models/users.models';
import { TUser } from '../types';
import createToken from '../auth/jwtFunctions';

async function createUser(user: TUser): Promise<object> {
  await usersModels.createUser(user);
  const token = createToken(user);
  return { token };
}

export default { createUser };