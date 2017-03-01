var express = require('express'); 
var path = require('path');
var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Bundled JavaScript and Styles
app.get('/bundle.js', function (req, res){
    res.sendFile(path.join(__dirname, '/dist/bundle.js'));
});
app.get('/style.css', function (req, res){
    res.sendFile(path.join(__dirname, '/app/dist/styles/style.css'));
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});