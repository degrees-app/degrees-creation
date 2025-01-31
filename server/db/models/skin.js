'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interface extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  Interface.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Interface',
    },
  );

  return Interface;
};
