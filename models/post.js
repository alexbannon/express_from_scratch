module.exports = function(sequelize, DataTypes) {
  var model = sequelize.define("post", {
    title: DataTypes.STRING,
    post_content: DataTypes.STRING,
  })
  return model;
}
