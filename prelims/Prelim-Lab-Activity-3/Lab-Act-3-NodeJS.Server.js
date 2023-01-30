//Task Name: Creating Node.js Application
//Author: Estanislao, Francilyn Bernadette P.
//Section: WD-201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h2>Welcome to my Node.js Application</h2></body></hmtl>'
    );
    res.write(
      '<html><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></hmtl>'
    );
    res.end();
  }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
