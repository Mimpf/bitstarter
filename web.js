var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var filename = "index.html";

function readFS(filename){
	
	
	
	
	}

app.get('/', function(request, response) {

  response.send(fs.readFile(filename, 'utf8',function (err, data) {
  				if (err) throw err;
  					console.log(data+" Reading Successful");
  					return data;
				}) );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});