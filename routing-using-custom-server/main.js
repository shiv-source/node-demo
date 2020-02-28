var http = require('http');
var fs = require('fs');



var myObj = [
    {
        first_name :"shiv",
        last_name :"kumar",
    },
    {
        job : "Software Developer",
        company : "Mechlin Technology",
    }
]

var server = http.createServer(function(req,res){
    console.log('listening on' + req.url );
    if (req.url === '/' || req.url === '/home' ){
        res.writeHead(200,{ 'Content-Type' : 'text/html' });
        fs.createReadStream(__dirname + '/index.html' , 'utf8').pipe(res);

    }
    else if (req.url === '/contact'){
        res.writeHead(200,{ 'Content-Type' : 'text/html' });
        fs.createReadStream(__dirname + '/contact.html' , 'utf8').pipe(res);

    }
    else if (req.url === '/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/about.html' , 'utf8').pipe(res);
    }
    else if (req.url === '/api/user'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(myObj));
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html' , 'utf8').pipe(res);
    }

});

server.listen(3000, '127.0.0.1');

console.log('Server is running at 127.0.0.1:3000');