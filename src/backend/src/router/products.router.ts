import { Request, Response, NextFunction, Router } from 'express';
import { RequestWithToken } from '../types/requestWithToken';
import tokenMiddleware from '../middleware/token.middleware';

const router = Router();

/**
 * @swagger
 * paths:
 *  /products:
 *      get:
 *          summary: Get all products
 *          tags: [Products]
 *          description: Get all products
 *          security:
 *              - bearerAuth: []
 *          responses:
 *              '200':
 *                  description: Successful request
 *              '401':
 *                  description: Unauthorized
 */

router.get(
    '/',
    (req: Request, res: Response, next: NextFunction) => {
        const request = req as RequestWithToken;
        tokenMiddleware(request, res, next);
    },
    (req: Request, res: Response) => {
        res.status(200).send('You are authorized');
    },
);

export default router;
