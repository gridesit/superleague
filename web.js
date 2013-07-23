var express = require('express');
var fs = require('fs');
var htmlfile = "index.html"

var app = express.createServer(express.logger());
app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public
console.log("Path:" + __dirname);

app.get('/', function(request, response) { 
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
