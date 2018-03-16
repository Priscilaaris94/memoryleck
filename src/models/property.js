module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {
    address_one: DataTypes.STRING,
    address_two: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    beds: DataTypes.STRING,
    bath: DataTypes.STRING,
    sqfeet: DataTypes.STRING,
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    tenant: DataTypes.STRING,
    images: DataTypes.STRING
  });

  Property.associate = function(models) {
    Property.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });

    // TO DO...
    // property has one owner 
    Property.hasOne(models.User, {
      onDelete: "cascade"
    });

    // TO DO...
    // property has one tenet
    // Users.hasOne(models.Property, {
    //   onDelete: "cascade"
    // });
  };

  return Property;
};