var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var sensor = new five.Sensor({
		pin: 'A2',
		freq: 250
	});

	board.repl.inject({
		pot: sensor
	});

	var led1 = new five.Led(7);
	var led2 = new five.Led(13);

	var cor = '';

	var opacidade = 1;

	var troca = function() {

		if(cor == 'red') {
			led1.off();
			led2.on();
		} else {
			led1.on();
			led2.off();
		}

		if (cor == 'hi') {
			led1.on();
			led2.on();
		}

		console.log('led diz: ' + cor);

	};

	io.on('connection', function(socket){
		console.log('a user connected');
		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
		socket.on('troca', function(msg){
			cor = msg;
			troca();
			socket.broadcast.emit('hi', cor);
		});
		sensor.scale(0, 1).on('data', function() {
			var powValue = this.value;
			if (powValue != opacidade) {
				socket.broadcast.emit('pow', powValue.toString());
				console.log(powValue, this.raw);
				opacidade = powValue;
			}
		});
	});

});

http.listen(3000, function(){
	console.log('listening on *:3000');
});