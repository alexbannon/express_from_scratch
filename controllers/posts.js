var express = require("express");
var router = express.Router();
var Post = require("../db/connection").models.Post


function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/posts", function(req, res) {
  res.send("index of posts");
})
router.get("/posts/:id", function(req, res) {
  res.send("show post #" + req.params.id);
})
router.get("/posts/new", function(req, res) {
  res.send("render new form for posts");
})
router.get("/posts/:id/edit", function(req, res) {
  res.send("render edit form for post #"+req.params.id);
})
router.post("/posts", function(req,res) {
  res.json(req.body)
})
router.put("/posts/:id", function(req,res){
  res.json("")
})
router.delete("/posts/:id", function(req,res){
  res.json("")
})
module.exports = router;
