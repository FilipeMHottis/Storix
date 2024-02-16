import { Model, QueryInterface, DataTypes } from 'sequelize';
import DiscountsRules from '../../types/Discounts/dicountsRules';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<DiscountsRules>>('DiscountsRules', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            description: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            code: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            type: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            value: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            minQuantity: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'min_quantity',
            },
            productNameOrTag: {
                allowNull: false,
                type: DataTypes.STRING,
                field: 'product_name_or_tag',
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('DiscountsRules');
    },
};