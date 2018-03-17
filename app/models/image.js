module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    src: DataTypes.STRING
  });

  Image.associate = function(models) {
    Image.belongsTo(models.Property, {
          onDelete: "SET NULL"
    });
  };
  return Image;
};