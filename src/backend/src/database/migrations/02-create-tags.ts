import { Model, QueryInterface, DataTypes } from 'sequelize';
import Tags from '../../types/Products/tags';

export default {
    // eslint-disable-next-line max-lines-per-function
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Tags>>('Tags', {
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
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('Tags');
    },
};