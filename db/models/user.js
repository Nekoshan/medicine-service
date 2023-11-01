'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Shop}) {
      this.hasMany(Shop, {foreignKey: 'user_id'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};