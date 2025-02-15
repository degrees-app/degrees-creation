'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Sound.init(
    {
      type: DataTypes.STRING,
      url: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sound',
    },
  );
  return Sound;
};
