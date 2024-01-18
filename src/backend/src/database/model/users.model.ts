import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Users from '../../types/users';

type UserWithIdOptinal = Optional<Users, 'id'>;
type UsersSequelizeModelCreator = ModelDefined<Users, UserWithIdOptinal>;
export type UserSequelize = Model<Users, UsersSequelizeModelCreator>;

const UsersSequelizeModel: UsersSequelizeModelCreator = db.define('Users', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    }, {
    timestamps: false,
    tableName: 'Users',
});

export default UsersSequelizeModel;
