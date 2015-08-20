var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///express_from_scratch");
var Artist = sequelize.import("../models/artist");
var Song = sequelize.import("../models/song");

Comment.belongsTo(Post);
Post.hasMany(Comment);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Post: Post,
    Comment: Comment
  }
}
