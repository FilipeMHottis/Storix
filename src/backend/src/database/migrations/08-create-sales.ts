import { Model, QueryInterface, DataTypes } from 'sequelize';
import Sales from '../../types/Sales/sales';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Sales>>('Sales', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            saleDate: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'sale_date',
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('Sales');
    },
};
