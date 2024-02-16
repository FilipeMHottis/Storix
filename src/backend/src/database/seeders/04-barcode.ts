/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Barcodes', [
      {
        id: '1',
        barcode: '123456789',
      },
      {
        id: '2',
        barcode: '987654321',
      },
      {
        id: '3',
        barcode: '123123123',
      },
      {
        id: '4',
        barcode: '321321321',
      },
      {
        id: '5',
        barcode: '456456456',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Barcodes', {});
  },
};
