var DB = require("./connection");

DB.models.Post.create({title: "Test Post, Please Ignore", post_content: "Hello World"}).done(function(){process.exit();})
DB.models.Post.create({title: "Second Post. It's Even Better!", post_content: "How can you not like this post?"}).done(function(){process.exit();})
DB.models.Post.create({title: "The Best Post Ever", post_content: "WOOOOOOOOO"}).done(function(){process.exit();})
DB.models.Comment.create({comment_content: "I agree", postId: 1}).done(function(){process.exit();})
DB.models.Comment.create({comment_content: "I agree", postId: 2}).done(function(){process.exit();})
DB.models.Comment.create({comment_content: "I agree", postId: 3}).done(function(){process.exit();})
