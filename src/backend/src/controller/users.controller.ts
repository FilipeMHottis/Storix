import { Request, Response } from 'express';
import usersService from '../service/users.service';
import httpMap from '../utils/httpMap';

type LoginRequest = {
    email: string;
    password: string;
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body as LoginRequest;
    const { status, data } = await usersService.login(email, password);
    return res.status(httpMap(status)).json(data);
};

export default {
    login,
};
