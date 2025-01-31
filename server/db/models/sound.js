'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sound extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  Sound.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sound',
    },
  );
  return Sound;
};
