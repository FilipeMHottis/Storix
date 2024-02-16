/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('ProductsTags', [
        {
            product_id: '1',
            tag_id: '1',
        },
        {
            product_id: '2',
            tag_id: '1',
        },
        {
            product_id: '3',
            tag_id: '1',
        },
        {
            product_id: '4',
            tag_id: '1',
        },
        {
            product_id: '2',
            tag_id: '2',
        },
        {
            product_id: '3',
            tag_id: '4',
        },
        {
            product_id: '4',
            tag_id: '5',
        },
        {
            product_id: '1',
            tag_id: '3',
        },
        {
            product_id: '3',
            tag_id: '6',
        },
        {
            product_id: '4',
            tag_id: '6',
        },
        {
            product_id: '1',
            tag_id: '7',
        },
        {
            product_id: '2',
            tag_id: '7',
        },
        {
            product_id: '3',
            tag_id: '7',
        },
        {
            product_id: '4',
            tag_id: '7',
        },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('productsTags', {});
  },
};
