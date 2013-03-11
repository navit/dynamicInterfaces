//built in for nodejs

var http = require("http");
var fs = require('fs'); // filesystem.
var path = require('path'); // used for traversing your OS.
var url = require('url');

// add to your hearts' content.
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

// jk: more advanced: https://npmjs.org/package/mime
http.createServer(function(req,res) {
	var fileToLoad;

	// you could also convert a url to a filename like so if you wanted
	if(req.url == "/easter-egg") {
		fileToLoad = "./lotsOfMoneyInTheBananaStand.html";
	}//if it's / then load index html otherwise load what the user asked for
	else if(req.url == "/") {
		fileToLoad = "./index.html";
	}
	else {
		fileToLoad = "." + url.parse(req.url).pathname;
	}

	var fileBytes;
	var httpStatusCode = 200;//it's ok

	// check to make sure a file exists...
	fs.exists(fileToLoad,function(doesItExist) {//nothing will happen until i know the file exsits

		// if it doesn't exist lets make sure we load error404.html
		if(!doesItExist) {
			httpStatusCode = 404;
			fileToLoad = "error404.html";
		}
		//load the file synchronisly  node gives you the option to load sync or a-sync. the file needs to finish loading and then it will move on
		fileBytes = fs.readFileSync(fileToLoad);//takes an argument
		var mimeType = mimeTypes[path.extname(fileToLoad).split(".")[1]]; // complicated, eh?

		res.writeHead(httpStatusCode,{'Content-type':mimeType});
		res.end(fileBytes);
	});
}).listen(8080,'127.0.0.1');