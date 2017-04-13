//get package dependencies
var app = require('express');
var app = express();
var bodyParser = require('body-parser');
var Post = require("./models/post-schema");
var postRoute = require("./routes/post-routes");

app.use(bodyParser.json());
app.use('/post', postRoute);
app.use(express.static('public'));

//bring mongoose connect db
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/vote-exercise");

var port = 8000;
app.listen(port, function(){
    console.log('server is running ' + port);
})