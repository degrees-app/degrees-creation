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
      backgroundImage: DataTypes.STRING, // Путь к загруженному изображению
      backgroundColor: DataTypes.STRING, // HEX-код цвета фона
      brightness: DataTypes.FLOAT, // Значение яркости (от 0.5 до 2)
      contrast: DataTypes.FLOAT, // Значение контраста (от 0.5 до 2)
    },
    {
      sequelize,
      modelName: 'Interface',
    },
  );
  return Interface;
};
