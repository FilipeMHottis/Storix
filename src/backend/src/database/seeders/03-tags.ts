/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('Tags', [
            {
                id: '1',
                name: 'Sorvete',
            },
            {
                id: '2',
                name: 'Chocolate',
            },
            {
                id: '3',
                name: 'Morango',
            },
            {
                id: '4',
                name: 'Oreo',
            },
            {
                id: '5',
                name: 'Menta',
            },
            {
                id: '6',
                name: 'Premium',
            },
            {
                id: '7',
                name: 'Tradicionais',
            },
        ], {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('Tags', {});
    },
};
