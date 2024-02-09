import UsersSequelizeModel from '../database/model/users.model';
import Users from '../types/users';

const userByEmail: (email: string) => Promise<Users | null> = async (email) => {
    try {
        const user = await UsersSequelizeModel.findOne({ where: { email }, logging: console.log });
        return user!.dataValues as Users;
    } catch (error) {
        return null;
    }
};

export default { userByEmail };