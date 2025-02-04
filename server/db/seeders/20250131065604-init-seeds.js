'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Skins', [
      {
        title: 'Ball',
      },
      {
        title: 'Ball',
      },
      {
        title: 'Ball',
      },
      {
        title: 'Ball',
      },
    ]);
    await queryInterface.bulkInsert('Balls', [
      {
        type: 'Color1',
      },
      {
        type: 'Color2',
      },
      {
        type: 'Color3',
      },
      {
        type: 'Color4',
      },
    ]);
    await queryInterface.bulkInsert('Sounds', [
      {
        type: 'sound 1',
        url: '/sounds/zvuk1.mp3',
      },
      {
        type: 'sound 2',
        url: '/sounds/zvuk2.mp3',
      },
      {
        type: 'sound 3',
        url: '/sounds/zvuk3.mp3',
      },
      {
        type: 'sound 4',
        url: '/sounds/zvuk4.mp3',
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
