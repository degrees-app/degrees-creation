'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Backround extends Model {
    static associate({ Skins }) {
      this.hasMany(Skins, { foreignKey: '' });
    }
  }

  Backround.init(
    {
      id:  DataTypes.INTEGER,
      image: DataTypes.TEXT,
      color:  DataTypes.STRING, 
      fontFamily:  DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Backrounds',
    },
  );

  return Backround;
};
