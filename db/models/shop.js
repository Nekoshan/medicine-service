'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({User,Medicine}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Medicine, {foreignKey: 'med_id'})
    }
  }
  Shop.init({
    user_id: DataTypes.INTEGER,
    med_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};