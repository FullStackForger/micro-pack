var http = require("http");
var port = process.argv[2] || 8080;
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE "html">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>MicroPack</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("It is working!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(port);
console.log("Server is listening");
