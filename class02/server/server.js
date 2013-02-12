var http = require('http');
http.createServer(function (req, res){
	console.log(req);
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //
  //res.end('Hello World\n');
  
  
  var myNumber = 2;
  var myotherNumber =2;
  res.end("two plus two is equal to");
  //says we are done here and prints out bytes
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');