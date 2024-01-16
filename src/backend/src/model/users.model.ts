import UsersSequelizeModel from '../database/model/users.model';
import Users from '../types/users';

const userByEmail: (email: string) => Promise<Users | null> = async (email) => {
    try {
        const user = await UsersSequelizeModel.findOne({
            where: {
                email,
            },
        });
        return user?.get() as Users;
    } catch (error) {
        return null;
    }
};

export default { userByEmail };