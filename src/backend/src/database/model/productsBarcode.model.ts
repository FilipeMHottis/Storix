import db from './index';
import ProductsSequelizeModel from './products.model';
import BarcodesSequelizeModel from './barcode.model';

const ProductsBarcodesSequelizeModel = db.define('ProductsBarcodes',
    {},
    {
        tableName: 'ProductsBarcodes',
        timestamps: false,
        underscored: true,
});

ProductsSequelizeModel.belongsToMany(ProductsSequelizeModel, 
    { 
        through: ProductsBarcodesSequelizeModel, 
        foreignKey: 'product_id', 
        otherKey: 'barcode_id',
        as: 'products', 
    });

BarcodesSequelizeModel.belongsToMany(BarcodesSequelizeModel, 
    { 
        through: ProductsBarcodesSequelizeModel, 
        foreignKey: 'barcode_id', 
        otherKey: 'product_id',
        as: 'barcodes',
    });

export default ProductsBarcodesSequelizeModel;