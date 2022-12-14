import JWT from 'jsonwebtoken';
import { TUser } from '../types';

const secret = process.env.JWT_SECRET || 'HakunaMatata';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (user: TUser): string => {
  const payload = { id: user.id, username: user.username };
  return JWT.sign(payload, secret as string, jwtConfig as object);
};

export default createToken;