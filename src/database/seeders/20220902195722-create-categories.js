'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories',
    [
      {
        name_category: 'Notebooks',
      },
      {
        name_category: 'Celulares',
      },
      {
        name_category: 'Smartwatches',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('categories', null, {});
  }
};
