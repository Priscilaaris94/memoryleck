module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request", {
    issue_title: DataTypes.STRING,
    issue_desc: DataTypes.STRING,
    date_started: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    status: DataTypes.STRING
  });

  Request.associate = function(models) {
    Request.belongsTo(models.Property, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Request;
};