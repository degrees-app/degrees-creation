'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Backround extends Model {
    static associate({ Skin }) {
      this.hasMany(Skin, { foreignKey: '' });
    }
  }

  Backround.init(
    {
      image: DataTypes.TEXT,
      color: DataTypes.STRING,
      fontFamily: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Backround',
    },
  );

  return Backround;
};
