'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skin extends Model {
       /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }

  Skin.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Skin',
    },
  );

  return Skin;
};
