var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led = new five.Led(3);

	var ledligado = false;

	setInterval(function() {

		if(ledligado) {
			led.off();
		} else {
			led.on();
		}
		ledligado = !ledligado;
		console.log(ledligado);

	}, 500);

});