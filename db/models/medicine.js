const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    static associate({ Shop }) {
      this.hasMany(Shop, { foreignKey: 'med_id' });
    }
  }

  Medicine.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.STRING,
      price: DataTypes.STRING,
      discount: DataTypes.BOOLEAN,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Medicine',
    },
  );
  return Medicine;
};

