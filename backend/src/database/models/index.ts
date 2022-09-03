import { Sequelize } from 'sequelize';
import config from '../config/config';

const sequelize = new Sequelize(
  process.env.MYSQL_URI || 'mysql://root:123456@127.0.0.1:3306/shopping-cart',
  config,
);

export default sequelize;
