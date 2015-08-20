module.exports = function(sequelize, DataTypes) {
  var model = sequelize.define("comment", {
    comment_content: DataTypes.STRING,
  })
  return model;
}
