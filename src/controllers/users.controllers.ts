import { Request, Response } from 'express';
import usersServices from '../services/users.services';

async function createUser(req: Request, res: Response) {
  const { body } = req;
  const token = await usersServices.createUser(body);
  return res.status(201).json(token);
}

export default { createUser };