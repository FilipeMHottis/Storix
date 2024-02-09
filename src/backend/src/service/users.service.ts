import userModel from '../model/users.model';
import ServiceResponse from '../types/serviceResponse';
import jwt from '../utils/jwt';
import bycript from '../utils/bycript';

type LoginResponse = {
    token: string;
};

const login: (e: string, p: string) => Promise<ServiceResponse<LoginResponse>> = async (e, p) => {
    const user = await userModel.userByEmail(e);

    if (!user || !await bycript.comparePassword(p, user.password)) {
        return {
            status: 'unauthorized',
            data: { error: { mensagem: 'User not found or Incorrect Email or Password' } },
        };
    }

    const token = await jwt.generatorToken({ id: user.id, email: user.email });

    return {
        status: 'success', data: { token },
    };
};

export default {
    login,
};
