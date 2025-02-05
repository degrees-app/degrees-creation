'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ball extends Model {
       /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }

  Ball.init(
    {
      width:DataTypes.FLOAT,
      color:DataTypes.INTEGER,
      shape:DataTypes.STRING,
      opacity: DataTypes.FLOAT,
      author: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Ball',
    },
  );

  return Ball;
};
