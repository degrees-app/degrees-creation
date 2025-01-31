'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ball extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  Ball.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ball',
    },
  );

  return Ball;
};
