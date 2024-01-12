import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Barcodes from '../../types/Products/barcodes';

type BarcodesWithIdOptinal = Optional<Barcodes, 'id'>;
type BarcodesSequelizeModelCreator = ModelDefined<Barcodes, BarcodesWithIdOptinal>;
export type BarcodesSequelize = Model<Barcodes, BarcodesSequelizeModelCreator>;

const BarcodesSequelizeModel: BarcodesSequelizeModelCreator = db.define('Barcodes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    timestamps: false,
    tableName: 'Barcodes',
});

export default BarcodesSequelizeModel;
