module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("post", {
    title: Sequelize.STRING,
    post_content: Sequelize.STRING,
  })
}
