'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Balls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lineType: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      width: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dashed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      color: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dashScale: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dashGap: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shape: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Balls');
  },
};
