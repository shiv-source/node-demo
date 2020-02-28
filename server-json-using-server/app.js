var http = require('http');

var myObj= {
    name : "shiv kumar",
    job : "software developer",
    place : "chandigarh"
}

var server = http.createServer(function(req, res){
    res.writeHead(200 , {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(myObj));
});

server.listen(3000 , '127.0.0.1');

console.log("server is running and listening on port 3000");