'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Skins', [
      {
        title: 'Ball',
      },
      {
        title: 'Interface',
      },
      {
        title: 'Background',
      },
      {
        title: 'Sound',
      },
    ]);
    await queryInterface.bulkInsert('Balls', [
      {
        type: 'Ball',
      },
      {
        type: 'Ball1',
      },
      {
        type: 'Ball2',
      },
      {
        type: 'Ball3',
      },
    ]);
    await queryInterface.bulkInsert('Interfaces', [
      {
        type: 'interface1',
      },
      {
        type: 'Interface2',
      },
      {
        type: 'Interface3',
      },
      {
        type: 'Interface4',
      },
    ]);
    await queryInterface.bulkInsert('Sounds', [
      {
        type: 'Sound1',
      },
      {
        type: 'Sound2',
      },
      {
        type: 'Sound3',
      },
      {
        type: 'Sound4',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Backrounds', null, {});
    await queryInterface.bulkDelete('Sounds', null, {});
    await queryInterface.bulkDelete('Interfaces', null, {});
    await queryInterface.bulkDelete('Balls', null, {});
    await queryInterface.bulkDelete('Skins', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
