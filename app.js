var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("connect-flash");
//var multer = require("multer");


var indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: "moi",
	resave: false,
	saveUninitialized: false
}))	;
//app.use(multer({dest:"./public/img/portfolio"}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(flash());



app.use("/", indexRoutes);

app.listen("4000", function(){
	console.log("App working")
});