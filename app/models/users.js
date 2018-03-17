module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING // either 'tenet' or 'landlord'
  });

  Users.associate = function(models) {
    Users.hasMany(models.Property, {
      onDelete: "SET NULL"
    });

    Users.hasMany(models.Payment, {
      onDelete: "SET NULL"
    });

  };

  return Users;
};