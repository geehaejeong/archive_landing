//
try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

var express  	= require('express');
var app 		= express();
var https = require('https');
var bodyParser 	= require('body-parser');

app.use(express.static(__dirname + './../app'));
app.listen(env.port,function(){
	console.log('Listenting on '+env.host+':'+env.port);
	console.log('Stop server with CTRL + C');
})



// var domain = 'https://api.instagram.com/'
// var token = '3047809982.c916a8f.c652358bace74d41acbe9715263f440a';
// ​
// app.get('/', function(req, __res) {
//   var search = req.params.hashtag;
//   https.get(domain + 'v1/users/self/media/recent/?access_token=' + token, function(res) {
//       var body ='';
//       res.on('data', function(data) {
//         body += data;
//       });
// ​
//       res.on('end', function() {
//         var response = JSON.parse(body);
//         var imageUrls = response.data.map(function (row) {
//           return row.images.standard_resolution.url;
//       });
//         __res.send(imageUrls)
//       })
//   }).on('error', function(err) {
//     console.log(err);
//   })
// });


