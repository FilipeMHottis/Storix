/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('Sales', [
        {
            id: '1',
            sale_date: new Date(),
        },
        {
            id: '2',
            sale_date: new Date(),
        },
        {
            id: '3',
            sale_date: new Date(),
        },
        ], {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('SaleHistories', {});
    },
    };