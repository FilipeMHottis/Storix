import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import SalesSequelizeModel from './sales.model';
import SaleDeatails from '../../types/Sales/saleDetails';
import ProductsSequelizeModel from './products.model';

type SalesDetailsSequelizeModelCreator = ModelDefined<SaleDeatails, SaleDeatails>;
export type SalesDetailsSequelize = Model<SaleDeatails, SalesDetailsSequelizeModelCreator>;

const SalesDetailsSequelizeModel: SalesDetailsSequelizeModelCreator = db.define('SalesDetails',
    {
        saleId: {
            type: DataTypes.UUID,
            primaryKey: true,
            field: 'sale_id',
            references: {
                model: SalesSequelizeModel,
                key: 'id',
            },
        },
        productId: {
            type: DataTypes.UUID,
            primaryKey: true,
            field: 'product_id',
            references: {
                model: ProductsSequelizeModel,
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'SalesDetails',
    });

SalesSequelizeModel.hasMany(SalesDetailsSequelizeModel, {
    foreignKey: 'sale_id',
    as: 'sale',
});

ProductsSequelizeModel.hasMany(SalesDetailsSequelizeModel, {
    foreignKey: 'product_id',
    as: 'product',
});

export default SalesDetailsSequelizeModel;