var express = require('express')

const port = 3000;

app = express();

app.get('/', function(req,res){
    res.send('Home-Page');
});
app.get('/home', function(req,res){
    res.send('Home-Page');
})



app.listen(port,function(){
    console.log("Express server is listening at port:" + port)
} )
