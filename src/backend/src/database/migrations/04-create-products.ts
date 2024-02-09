import { Model, QueryInterface, DataTypes } from 'sequelize';
import Products from '../../types/Products/products';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Products>>('Products', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            currentQuantity: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'current_quantity',
            },
            minQuantity: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'min_quantity',
            },
            price: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            image: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('Products');
    },
};