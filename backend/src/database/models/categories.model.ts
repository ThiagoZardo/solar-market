import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class CategoryModel extends Model {
  declare id?: number;
  declare nameCategory?: string;
}

CategoryModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCategory: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'category',
  tableName: 'categories',
  timestamps: false,
});

export default CategoryModel;
