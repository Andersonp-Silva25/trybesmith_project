import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwtFunctions';

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verifyToken(token);
    if (decoded) return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

async function validateProductsIds(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
 
  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });
  
  const isProductsIdsArray = Array.isArray(productsIds);
  if (!isProductsIdsArray) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  
  return next();
}

export { validateToken, validateProductsIds };