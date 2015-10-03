var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led = new five.Led(3);

	var ledligado = false;

	setInterval(function() {

		led.pulse(500);

		console.log('again');

	}, 5000);

});