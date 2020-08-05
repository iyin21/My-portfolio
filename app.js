var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

var indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: "moi",
	resave: false,
	saveUninitialized: false
}))	;

app.set("view engine", "ejs");
app.use("/", indexRoutes);

app.listen("4000", function(){
	console.log("App working")
});