import userModel from '../model/users.model';
import ServiceResponse from '../types/serviceResponse';
import jwt from '../utils/jwt';
import bycript from '../utils/bycript';

type LoginResponse = {
    token: string;
};

const login: (e: string, p: string) => Promise<ServiceResponse<LoginResponse>> = async (e, p) => {
    const user = await userModel.userByEmail(e);

    if (!user) {
        return {
            status: 'notFound', data: { error: { mensagem: 'Usuário não encontrado' } },
        };
    }

    const senhaCorreta = await bycript.comparePassword(p, user.password);

    if (!senhaCorreta) {
        return {
            status: 'unauthorized', data: { error: { mensagem: 'Senha incorreta' } },
        };
    }

    const token = await jwt.generatorToken({ id: user.id, email: user.email });
    console.log(token);

    return {
        status: 'success', data: { token },
    };
};

export default {
    login,
};
