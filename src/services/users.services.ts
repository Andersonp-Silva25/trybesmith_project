import usersModels from '../models/users.models';
import { TResponse, TUser } from '../types';
import { createToken } from '../auth/jwtFunctions';

async function createUser(user: TUser): Promise<object> {
  const id = await usersModels.createUser(user);
  const token = createToken({ id, ...user });
  return { token };
}

async function getByUserAndPass(login: TUser): Promise<TResponse> {
  const user = await usersModels.getByUserAndPass(login);
  
  if (!user) return { type: 401, message: 'Username or password invalid' };
  
  const token = createToken(user as TUser);
  
  return { type: null, message: token };
}

export default { createUser, getByUserAndPass };