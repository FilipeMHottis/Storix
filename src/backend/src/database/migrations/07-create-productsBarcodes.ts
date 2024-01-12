import { Model, QueryInterface, DataTypes } from 'sequelize';
import ProductsBarcodes from '../../types/Products/ProductsBarcodes';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<ProductsBarcodes>>('ProductsBarcodes', {
            productId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'product_id',
                references: {
                    model: 'Products',
                    key: 'id',
                },
            },
            barcodeId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'barcode_id',
                references: {
                    model: 'Barcodes',
                    key: 'id',
                },
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('ProductsBarcodes');
    },
};