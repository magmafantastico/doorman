var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led3 = new five.Led(3);

	var led3ligado = false;

	setInterval(function() {

		if(led3ligado) {
			led3.off();
		} else {
			led3.on();
		}
		led3ligado = !led3ligado;
		console.log(led3ligado);

	}, 2000);

});