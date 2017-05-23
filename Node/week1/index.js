var http = require('http');

var port = 8080;
var state = 10;
var server = http.createServer();

// Start the HTTP server, start listening for requests
server.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('api listening on port', port);
  }
});
// Create a event handler for "request"
// this is an alternative way
server.on('request', function(request, response) {
  console.log('New http request received', request.url, state);
  var message = ``;         // the text which will be written in the HTML body
  var messageContent = function  (x) {  // the calculation for the content of Message
    return      `<html>
                <head>
                </head>
                <body>
                <h1>The state is: '  ${x}  '</h1>
                </body>
                </html>`;}

  if (request.url === '/state' || request.url === '/'){
    message = messageContent(state)
  }
  else if (request.url === '/add') {
    state++
    message = messageContent(state)
  }
  else if (request.url === '/remove') {
    state--
    message = messageContent(state)
  }
  else if (request.url === '/reset') {
    state = 10
    message = messageContent(state)
    }
    else{
    message = `
        <html>
        <head>
        </head>
        <body>
        <h1>
        return error code 404: Not found<br><br>
        Please try one of those options:<br>
         - http://localhost:8080<br>
         - http://localhost:8080/remove<br>
         - http://localhost:8080/add<br>
         - http://localhost:8080/reset<br>
         - http://localhost:8080/state
        </h1>
        </body>
        </html>`
  }
  response.setHeader('content-type', 'text/html');
  response.write(message);
  response.end();
});
