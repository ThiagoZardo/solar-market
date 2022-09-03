'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      nameCategory: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_category'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
