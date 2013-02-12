var http = require('http');
var url = require("url");

http.createServer(function(req,res){
	var parsedUrl= url.parse(req.url);
	
	
	console.log(parsedUrl);
	console.log("Requested "+ parsedUrl);
	
}).listen(8080,"127.0.0.1");