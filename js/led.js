var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led = new five.Led(3);

	var ledligado = false;

	setInterval(function() {

		setTimeout(function() {

			led.on();

		}, 500);

		led.off();

		console.log('again');

	}, 500);

});