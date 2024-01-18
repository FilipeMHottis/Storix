import { QueryInterface } from 'sequelize';
import bycript from '../../utils/bycript';

const username = process.env.ADMIN_USERNAME || 'testUsername';
const email = process.env.ADMIN_EMAIL || 'testEmail@email.com';
const password = async () => {
    const p = await bycript.hashPassword(process.env.ADMIN_PASSWORD || '123456');
    return p;
};

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('Users', [
            {
                id: '1',
                username,
                email,
                password: await password(),
            },
        ], {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('Users', {});
    },
};