import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Tags from '../../types/Products/tags';

type TagsWithIdOptinal = Optional<Tags, 'id'>;
type TagsSequelizeModelCreator = ModelDefined<Tags, TagsWithIdOptinal>;
export type TagsSequelize = Model<Tags, TagsSequelizeModelCreator>;

const TagsSequelizeModel: TagsSequelizeModelCreator = db.define('Tags', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    timestamps: false,
    tableName: 'Tags',
});

export default TagsSequelizeModel;
