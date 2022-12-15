import { Request, Response, NextFunction } from 'express';

function validateUserAndPass(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  return next();
}

export default validateUserAndPass;