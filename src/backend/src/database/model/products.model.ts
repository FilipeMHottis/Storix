import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Products from '../../types/Products/products';

type ProductsWithIdOptinal = Optional<Products, 'id'>;
type ProductsSequelizeModelCreator = ModelDefined<Products, ProductsWithIdOptinal>;
export type ProductsSequelize = Model<Products, ProductsSequelizeModelCreator>;

const ProductsSequelizeModel: ProductsSequelizeModelCreator = db.define('Products', 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'current_quantity',
        },
        minQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'min_quantity',
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
    }, 
    }, 
    {
        timestamps: false,
        tableName: 'Products',
    });

export default ProductsSequelizeModel;
