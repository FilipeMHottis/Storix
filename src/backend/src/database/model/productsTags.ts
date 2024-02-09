import db from './index';
import ProductsSequelizeModel from './products.model';
import TagsSequelizeModel from './tags.model';

const ProductsTagsSequelizeModel = db.define('ProductsTags',
    {},
    {
        tableName: 'ProductsTags',
        timestamps: false,
        underscored: true,
});

ProductsSequelizeModel.belongsToMany(ProductsSequelizeModel, 
    { 
        through: ProductsTagsSequelizeModel, 
        foreignKey: 'product_id', 
        otherKey: 'tag_id',
        as: 'products', 
    });
TagsSequelizeModel.belongsToMany(TagsSequelizeModel, 
    { 
        through: ProductsTagsSequelizeModel, 
        foreignKey: 'tag_id', 
        otherKey: 'product_id',
        as: 'tags',
    });

export default ProductsTagsSequelizeModel;
