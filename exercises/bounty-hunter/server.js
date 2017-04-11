var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");

var port = 8000;

var app = express();

//var path = require("path"); only used dirname

//app.use(express.static(path.join(__dirname, "public")));//middleware not needed this is for wondows machines not needed

app.use(express.static("public"));///middleware this tells backend anytime hits route and stuff comes back and express is used to send info back to client it looks what to do in public folder

var bounties = 
    [
        {
            fName: 'Jason',
            lName: "Lee",
            cost: 10000000,
            _id: "a1234"
        },
        {
           fName: 'Aaron',
            lName: "Ellis",
            cost: 10,
            _id: "b5678" 
        }           
    ];

app.get("/bounties", function(req, res){
    res.send(bounties)//starte here sending info
})


app.listen(port, function(){
    console.log("your server is listening on port " + port)
})

///start here