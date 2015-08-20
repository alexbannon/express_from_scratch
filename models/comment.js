module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("comment", {
    comment_content: Sequelize.STRING,
  })
}
