import { Model, QueryInterface, DataTypes } from 'sequelize';
import SaleDeatails from '../../types/Sales/saleDetails';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<SaleDeatails>>('SaleDeatails', {
            saleId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'sale_id',
                references: {
                    model: 'Sales',
                    key: 'id',
                },
            },
            productId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'product_id',
            },
            quantity: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            price: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            discount: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('SaleDeatails');
    },
};