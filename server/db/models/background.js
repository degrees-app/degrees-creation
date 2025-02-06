'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Background extends Model {
    static associate({ Skin }) {
      this.hasMany(Skin, { foreignKey: '' });
    }
  }
  Background.init(
    {
      backgroundImage: DataTypes.STRING, // Путь к загруженному изображению
      backgroundColor: DataTypes.STRING, // HEX-код цвета фона
      brightness: DataTypes.FLOAT, // Значение яркости (от 0.5 до 2)
      contrast: DataTypes.FLOAT, // Значение контраста (от 0.5 до 2)
      animationType: DataTypes.STRING,
      animationColor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Background',
    },
  );
  return Background;
};
