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
      lineType: DataTypes.INTEGER,
      width:DataTypes.FLOAT,
      dashed:DataTypes.BOOLEAN,
      color:DataTypes.INTEGER,
      dashScale:DataTypes.FLOAT,
      dashGap:DataTypes.INTEGER,
      shape:DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ball',
    },
  );

  return Ball;
};
