var express  	= require('express');
var app 		= express();
var https 		= require('https');
var bodyParser 	= require('body-parser');




try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}


app.use(express.static(__dirname + './../app'));
app.listen(env.port,function(){
	console.log('Listenting on '+env.host+':'+env.port);
	console.log('Stop server with CTRL + C');
})




// Authenticate via API Key
var tumblr = require('tumblr.js');
var client = tumblr.createClient({ consumer_key: 'soQA0paoq80ace0dCCDEa2rmk0b6QOlYDUshtNWqwv52LjsW6e' });

// Make the request


app.get('/blog', function(req, res){
	client.posts('archive-studio-blog.tumblr.com', function (err, resp) {
		console.log(resp.posts[0].caption);
		var getPosts = resp.posts;
		res.send(getPosts);
	});

})


