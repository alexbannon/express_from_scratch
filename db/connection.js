var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///express_from_scratch");
var Post = sequelize.import("../models/post");
var Comment = sequelize.import("../models/comment");

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
