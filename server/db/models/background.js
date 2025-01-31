'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Background extends Model {
    static associate({ Skins }) {
      this.hasMany(Skins, { foreignKey: '' });
    }
  }

  Background.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Background',
    },
  );

  return Background;
};
