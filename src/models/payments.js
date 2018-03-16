module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define("Payment", {
    date: DataTypes.STRING,
    tenant: DataTypes.STRING,
    property: DataTypes.STRING,
    amount: DataTypes.STRING,
    method: DataTypes.STRING,
    property: DataTypes.STRING,
  });

  Payment.associate = function(models) {
    Payment.belongsTo(models.Property, {
      foreignKey: {
        allowNull: true
      }
    });

    // property has one owner 
    Property.hasOne(models.User, {
      onDelete: "SET NULL"
    });
  };

  return Payment;
};