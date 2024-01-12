import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Sales from '../../types/Sales/sales';

type SalesWithIdOptional = Optional<Sales, 'id'>;
type SalesSequelizeModelCreator = ModelDefined<Sales, SalesWithIdOptional>;
export type SalesSequelize = Model<Sales, SalesSequelizeModelCreator>;

const SalesSequelizeModel: SalesSequelizeModelCreator = db.define('Sales',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        saleDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'sale_date',
        },
    },
    {
        timestamps: false,
        tableName: 'Sales',
    });

export default SalesSequelizeModel;
