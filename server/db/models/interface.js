'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interface extends Model {
    static associate({ Skin }) {
      this.hasMany(Skin, { foreignKey: '' });
    }
  }

  Interface.init(
    {
      image: DataTypes.TEXT,
      color: DataTypes.STRING,
      fontFamily: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Interface',
    },
  );

  return Interface;
};
