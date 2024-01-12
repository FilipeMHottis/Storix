import { Model, QueryInterface, DataTypes } from 'sequelize';
import ProductsTags from '../../types/Products/productsTags';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<ProductsTags>>('ProductsTags', {
            productId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'product_id',
                references: {
                    model: 'Products',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            tagId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                field: 'tag_id',
                references: {
                    model: 'Tags',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('ProductsTags');
    },
};