import { Response, NextFunction } from 'express';
import { RequestWithToken } from '../types/requestWithToken';
import jwt from '../utils/jwt';

const tokenMiddleware = async (req: RequestWithToken, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization as string;

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.slice(7);

    try {
      const decoded = await jwt.verifyToken(token) as string;
      req.token = decoded;
      next();
    } catch (error) {
      res.status(401).send('Unauthorized');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
};

export default tokenMiddleware;
