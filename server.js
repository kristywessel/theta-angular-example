var express = require('express');

var path = require('path');

var app = express();


app.use(express.static("public"));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});