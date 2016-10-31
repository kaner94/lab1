/*
Distributed Systems - Lab1
Ryan Kane - 1332 5208
NodeJS
*/

var net = require("net");

var HOST = '10.62.0.121';
var PORT = 8000;

var socket = new net.Socket();

socket.connect(PORT, HOST, function(){
	console.log("Connected!\n");

	socket.write("GET /echo.php?message=this_should_work HTTP/1.1\r\n\r\n");
});

socket.on('data', function(data){
	console.log("RECEIVED:  %s\n\n", data);
});

socket.on('error', function(error){
	console.log("ERROR:  %s\n\n", error.message);
});
