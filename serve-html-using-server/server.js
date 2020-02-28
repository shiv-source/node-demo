var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('req was made at'+ req.url);
    res.writeHead(200,{ 'Content-Type' : 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    console.log(myReadStream);
    myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Listen on port 3000 at Ip: 12.0.0.1');