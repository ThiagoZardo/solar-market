"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const categories_model_1 = __importDefault(require("./categories.model"));
class ProductsModel extends sequelize_1.Model {
}
ProductsModel.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'product',
    tableName: 'products',
    timestamps: false,
});
categories_model_1.default.hasMany(ProductsModel, { foreignKey: 'id', as: 'products' });
ProductsModel.belongsTo(categories_model_1.default, { foreignKey: 'category', as: 'categoryInfo' });
exports.default = ProductsModel;
