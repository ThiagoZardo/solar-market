import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import CategoryModel from './categories.model';

class ProductsModel extends Model {
  declare id?: number;
  declare productName?: string;
  declare description?: string;
  declare image?: string;
  declare category?: number;
  declare price?: number;
  declare quantity?: number;
  declare categoryInfo?: { id?: number, nameCategory?: string };
}

ProductsModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  category: {
    type: INTEGER,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'product',
  tableName: 'products',
  timestamps: false,
});

CategoryModel.hasMany(ProductsModel, { foreignKey: 'id', as: 'products' });
ProductsModel.belongsTo(CategoryModel, { foreignKey: 'category', as: 'categoryInfo' });

export default ProductsModel;
