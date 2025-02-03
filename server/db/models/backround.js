'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Backround extends Model {
<<<<<<< HEAD
    static associate({ Skin }) {
      this.hasMany(Skin, { foreignKey: '' });
=======
    static associate(models) {
>>>>>>> dev
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
