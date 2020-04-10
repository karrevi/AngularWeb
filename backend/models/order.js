'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    deliveryday: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: models.OrderProduct
    });
  };
  return Order;
};