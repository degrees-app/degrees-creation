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
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'ball.',
      },
      {
        name: 'line.',
      },
      {
        name: 'interface.',
      },
    ]);
    await queryInterface.bulkInsert('Sounds', [
      {
        type: 'sound. ball1',
        url: '/sounds/zvuk1.mp3',
        categoryId: 1,
      },
      {
        type: 'sound. ball2',
        url: '/sounds/zvuk2.mp3',
        categoryId: 1,
      },
      {
        type: 'sound. ball3',
        url: '/sounds/zvuk3.mp3',
        categoryId: 1,
      },
      {
        type: 'sound. line1',
        url: '/sounds/zvuk1.mp3',
        categoryId: 2,
      },
      {
        type: 'sound. line2',
        url: '/sounds/zvuk2.mp3',
        categoryId: 2,
      },
      {
        type: 'sound. line3',
        url: '/sounds/zvuk3.mp3',
        categoryId: 2,
      },
      {
        type: 'sound. interface1',
        url: '/sounds/zvuk4.mp3',
        categoryId: 3,
      },
      {
        type: 'sound. interface2',
        url: '/sounds/zvuk5.mp3',
        categoryId: 3,
      },
      {
        type: 'sound. interface3',
        url: '/sounds/zvuk6.mp3',
        categoryId: 3,
      },
      // {
      //   type: 'sound. 4',
      //   url: '/sounds/zvuk4.mp3',
      //   categoryId: 1,
      // },
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
