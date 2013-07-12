var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var filename = "index.html";

function readFS(filename){
	var file = fs.readFile(filename, 'utf-8',function (err, data) {
  				if (err) throw err;
  					console.log(data);
				});
	return file;
	
	}

app.get('/', function(request, response) {

  response.send(readFS());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});