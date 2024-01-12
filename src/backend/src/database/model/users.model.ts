import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Users from '../../types/users';

type UserWithIdOptinal = Optional<Users, 'id'>;
type UsersSequelizeModelCreator = ModelDefined<Users, UserWithIdOptinal>;
export type UserSequelize = Model<Users, UsersSequelizeModelCreator>;

const UsersSequelizeModel: UsersSequelizeModelCreator = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    timestamps: false,
    tableName: 'Users',
});

export default UsersSequelizeModel;
