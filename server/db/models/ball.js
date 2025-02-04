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
      width:DataTypes.INTEGER,
      dashed:DataTypes.BOOLEAN,
      color:DataTypes.INTEGER,
      dashScale:DataTypes.INTEGER,
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
