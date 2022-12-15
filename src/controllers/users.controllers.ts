import { Request, Response } from 'express';
import usersServices from '../services/users.services';

async function createUser(req: Request, res: Response) {
  const { body } = req;
  const token = await usersServices.createUser(body);
  return res.status(201).json(token);
}

async function login(req: Request, res: Response) {
  const { body } = req;
  const { type, message } = await usersServices.getByUserAndPass(body);
  
  if (type) return res.status(type).json({ message });

  return res.status(200).json({ token: message });
}

export default { createUser, login };