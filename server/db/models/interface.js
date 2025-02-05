'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interface extends Model {
    static associate(model) {}
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
