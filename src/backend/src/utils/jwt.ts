import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type Payload = {
    id: string;
    email: string;
};

const generatorToken = async (payload: Payload) => jwt.sign(payload, secret, { expiresIn: '1h' });
const verifyToken = async (token: string) => jwt.verify(token, secret);
const decodeToken = async (token: string) => jwt.decode(token);

export default {
    generatorToken,
    verifyToken,
    decodeToken,
};