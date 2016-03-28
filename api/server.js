//
try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

var express  = require('express');
var app = express();
var https = require('https');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + './../app'));

app.listen(env.port,function(){
	console.log('Listenting on '+env.host+':'+env.port);
	console.log('Stop server with CTRL + C');
})


var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=439034.b9afd9e.9ff88211d74743b28ddce2ea0229e04b";


