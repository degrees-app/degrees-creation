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
        type: '/sounds/zvuk1.mp3',
      },
      {
        type: '/sounds/zvuk2.mp3',
      },
      {
        type: '/sounds/zvuk3.mp3',
      },
      {
        type: '/sounds/zvuk4.mp3',
      },
    ]);
    await queryInterface.bulkInsert('Backgrounds', [
      {
        type: 'Backgrounds1',
      },
      {
        type: 'Backgrounds2',
      },
      {
        type: 'Backgrounds3',
      },
      {
        type: 'Backgrounds4',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Backgrounds', null, {});
    await queryInterface.bulkDelete('Sounds', null, {});
    await queryInterface.bulkDelete('Interfaces', null, {});
    await queryInterface.bulkDelete('Balls', null, {});
    await queryInterface.bulkDelete('Skins', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
