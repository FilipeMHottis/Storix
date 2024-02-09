import { Model, QueryInterface, DataTypes } from 'sequelize';
import Barcodes from '../../types/Products/barcodes';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Barcodes>>('Barcodes', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
            },
            barcode: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('Barcodes');
    },
};
