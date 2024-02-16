/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('SalesDetails', [
            {
                sale_id: '1',
                product_id: '1',
                quantity: 1,
                price: 10,
                discount: 0,
            },
            {
                sale_id: '1',
                product_id: '2',
                quantity: 1,
                price: 10,
                discount: 5,
            },
            {
                sale_id: '2',
                product_id: '3',
                quantity: 1,
                price: 10,
                discount: 0,
            },
            {
                sale_id: '3',
                product_id: '4',
                quantity: 1,
                price: 10,
                discount: 0,
            },
        ], {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('SaleDetails', {});
    },
};
