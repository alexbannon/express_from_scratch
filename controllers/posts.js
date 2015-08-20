var express = require("express");
var router = express.Router();
var Post = require("../db/connection").models.Post


function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/posts", function(req, res) {
  Post.findAll().then(function(posts){
    res.json(posts);
  });
});

router.get("/posts/:id", function(req, res) {
  Post.findById(req.params.id).then(function(post){
    res.json(post);
  });
});

router.get("/posts/:id/comments", function(req,res){
  Post.findById(req.params.id).then(function(post){
    if(!post){
      return error(res, "post not found");
    }
    post.getComments().then(function(comments){
      res.json(comments);
    })
  })
})

router.post("/posts", function(req,res) {
  Post.create(req.body).then(function(post){
    res.json(post);
  });
});

router.put("/posts/:id", function(req,res){
  Post.findById(req.params.id).then(function(post){
    if(!post){
      return error(res, "post not found");
    }
    post.update(req.body).then(function(updatedPost){
      res.json(updatedPost);
    });
  });
});

router.patch("/posts/:id", function(req,res){
  Post.findById(req.params.id).then(function(post){
    if(!post){
      return error(res, "post not found");
    }
    post.updateAttributes(req.body).then(function(updatedPost){
      res.json(updatedPost);
    });
  });
})

router.delete("/posts/:id", function(req,res){
  Post.findById(req.params.id).then(function(post){
    if(!post){
      return error(res, "post not found");
    }
    post.destroy().then(function(){
      res.json({success: true});
    });
  });
});

/////////////////////////////////
// form pages that I'll probably delete, but might need later
// router.get("/posts/new", function(req, res) {
//   res.send("render new form for posts");
// });
//
// router.get("/posts/:id/edit", function(req, res) {
//   res.send("render edit form for post #"+req.params.id);
// });
/////////////////////////////////

module.exports = router;
