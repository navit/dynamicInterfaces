var http = require('http');
var url = require("url");
var sf = require("fs");

http.createServer(function(req,res){
	var parsedUrl= url.parse(req.url);
	
	
	console.log(parsedUrl);
	console.log("Requested "+ parsedUrl);
	
	var httpStatusCode = 200;
	
	fs.exists(parsedUrl.pathname, function(doesItExist) { //its a boolean
	
	if(doesItExist == false){
		httpStatusCode = 404;
	}
	
		console.log("does this file exist? :: " + doesItExist);
		
		console.log("HTTP status code :: " + httpStatusCode);
		
		
	});
	
}).listen(8080,"127.0.0.1");