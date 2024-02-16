/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('ProductsBarcodes', [
        {
            product_id: '1',
            barcode_id: '1',
        },
        {
            product_id: '2',
            barcode_id: '2',
        },
        {
            product_id: '3',
            barcode_id: '3',
        },
        {
            product_id: '4',
            barcode_id: '4',
        },
        {
            product_id: '1',
            barcode_id: '5',
        },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('productsBarcodes', {});
  },
};
