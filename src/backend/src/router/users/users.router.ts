import { Request, Response, Router } from 'express';
import usersController from '../../controller/users.controller';

const router = Router();

router.post('/login', (req: Request, res: Response) => usersController.login(req, res));

export default router;
