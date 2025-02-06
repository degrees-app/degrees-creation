'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Backgrounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      backgroundImage: {
        type: Sequelize.STRING, // Путь к загруженному изображению
        allowNull: false,
      },
      backgroundColor: {
        type: Sequelize.STRING, // HEX-код цвета фона
        allowNull: false,
        defaultValue: '#000000',
      },
      animationColor: {
        type: Sequelize.STRING, // HEX-код цвета фона
        allowNull: false,
        defaultValue: '#000000',
      },
      aminationType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brightness: {
        type: Sequelize.FLOAT, // Значение яркости (от 0.5 до 2)
        allowNull: false,
        defaultValue: 1,
      },
      contrast: {
        type: Sequelize.FLOAT, // Значение контраста (от 0.5 до 2)
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Backgrounds');
  },
};
