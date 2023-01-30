//Task Name: Creating Node.js Application
//Author: Estanislao, Francilyn Bernadette P.
//Section: WD-201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>Welcome to my Node.js Application</h1></body></hmtl>'
    );
    res.write(
      '<html><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></hmtl>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h2>This is the About Page</h2></body></hmtl>');
    res.write(
      '<html><body><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></hmtl>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3>This is the About Page</h3></body></hmtl>');
    res.write(
      '<html><body><p>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs-tutorials</p></body></hmtl>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is the Gallery Page</h1></body></hmtl>');
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
