import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import DiscountsRules from '../../types/Discounts/dicountsRules';

type DiscountsRulesWithIdOptinal = Optional<DiscountsRules, 'id'>;
// eslint-disable-next-line max-len
type DiscountsRulesSequelizeModelCreator = ModelDefined<DiscountsRules, DiscountsRulesWithIdOptinal>;
export type DiscountsRulesSequelize = Model<DiscountsRules, DiscountsRulesSequelizeModelCreator>;

const RulesSequelizeModel: DiscountsRulesSequelizeModelCreator = db.define('DiscountsRules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    minQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'min_quantity',
    },
    productNameOrTag: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'product_name_or_tag',
    },
    }, {
    timestamps: false,
    tableName: 'DiscountsRules',
});

export default RulesSequelizeModel;