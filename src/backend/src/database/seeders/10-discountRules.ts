/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('DiscountsRules', [
            {
                id: '1',
                description: 'Na compra de 3 ou mais produtos tradicionais, o cliente ganha 10% de desconto em cada produto.',
                code: 'TRADICIONAL10',
                type: 'percentage',
                value: 10,
                min_quantity: 3,
                product_name_or_tag: 'TRADICIONAL',
            },
            {
                id: '2',
                description: 'Na compra de 3 ou produtos premium, o cliente ganha 10 reais de desconto em cada produto.',
                code: 'PREMIUM10',
                type: 'value',
                value: 10,
                min_quantity: 3,
                product_name_or_tag: 'PREMIUM',
            },
            {
                id: '3',
                description: 'Na compra de 5 ou mais produtos tradicionais ou premium, o cliente ganha mais 1 produto tradicional de graça.',
                code: 'VALE5',
                type: 'quantity',
                value: 1,
                min_quantity: 5,
                product_name_or_tag: '',
            },
            {
                id: '4',
                description: 'Na compra de 5 ou mais produtos tradicionais ou premium, o cliente ganha 1 sorvete de menta.',
                code: 'MENTA5',
                type: 'quantity',
                value: 1,
                min_quantity: 5,
                product_name_or_tag: 'sorvete de menta',
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('discountRules', {});
    },
};
