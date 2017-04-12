/* Avvia un Web Server
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/plain'});
  res.end('Hello!');
}).listen(1337, '127.0.0.1');
console.log('Webserver has started');
*/

// Avviare un web server che carica una pagina html
var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
  fs.readFile('index.html', function(err,data){
    response.writeHead(200,{'Content-type':'text/html'});
    response.end(data);
  });
}).listen(1337, '127.0.0.1');
console.log('Webserver has started');
