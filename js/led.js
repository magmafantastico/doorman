var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led = new five.Led(3);

	var ledligado = false;

	setInterval(function() {

		led.on();

		setTimeout(function() {

			led.off();

		}, 500);

		console.log('again');

	}, 5000);

});