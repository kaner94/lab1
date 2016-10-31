var net = require("net");

var HOST = '10.62.0.121';
var PORT = 9000;

var socket = new net.Socket();

socket.connect(PORT, HOST, function(){
	console.log("Connected!\n");

	socket.write("/echo.php?message=hello");
});

socket.on('data', function(data){
	console.log("RECEIVED:  %s\n\n", data);
});

