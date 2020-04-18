'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull: false, //required validación del modelo
      type: DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.Order, {
      through: models.OrderProduct
    });
  };
  return Product;
};