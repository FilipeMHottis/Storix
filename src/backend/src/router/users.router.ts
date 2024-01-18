import { Request, Response, Router } from 'express';
import usersController from '../controller/users.controller';

const router = Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login to the application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 'testEmail@email.com'
 *               password:
 *                 type: string
 *                 example: '123456'
 *     responses:
 *       '200':
 *          description: Successful login
 *          content:
 *              application/json:
 *                  example:
 *                      token: 'your-generated-token'
 *       '404':
 *          description: User not found
 *          content:
 *              application/json:
 *                  example:
 *                      error:
 *                          mensagem: 'Usuário não encontrado'
 *       '401':
 *          description: Unauthorized
 *          content:
 *              application/json:
 *                  example:
 *                      error:
 *                          mensagem: 'Senha incorreta'
 */

router.post('/login', (req: Request, res: Response) => usersController.login(req, res));

export default router;
