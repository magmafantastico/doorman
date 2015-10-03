var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led = new five.Led(3);

	var ledligado = false;

	setTimeout(function() {

		led.on();

	}, 500);

	led.off();

});