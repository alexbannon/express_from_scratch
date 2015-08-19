var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
