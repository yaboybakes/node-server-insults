//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
//ar PORT=8080;

var random = require("random-js")(); // uses the nativeMath engine


var PORT1 = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleGood(request, response){
    var compliments = ["You are beautiful!","You look great!","Keep up the good work","Amazing!"];
    var index = random.integer(0, compliments.length-1);
    response.end(compliments[index]);
}

function handleBad(request, response){
    var insults = ["You are smelly!","You look like a twat!","Keep up the horrible work","Gross!"];
    var index = random.integer(0, insults.length-1);
    response.end(insults[index]);
}


//Create a server
var server = http.createServer(handleGood);
var server2 = http.createServer(handleBad);

//Lets start our server
server.listen(PORT1, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:%s", PORT2);
});
