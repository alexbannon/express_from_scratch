var express = require("express");
var router = express.Router();
var Comment = require("../db/connection").models.Comment;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

module.exports = router;
