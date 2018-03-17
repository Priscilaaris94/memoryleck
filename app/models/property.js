module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {
    address_one: DataTypes.STRING,
    address_two: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    sqfeet: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING, // DataTypes.ENUM('one', 'two', 'three', ...)
  });

  Property.associate = function(models) {
    Property.belongsTo(models.User, {
      as: 'Landlord',
      foreignKey: {
        allowNull: true
      }
    });

    Property.hasOne(models.User, {
      as: 'Tenant',
      onDelete: "SET NULL"
    });

    Property.hasMany(models.Image, {
      onDelete: "SET NULL"
    });
  };

  return Property;
};