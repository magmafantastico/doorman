var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var led1 = new five.Led(7);
	var led2 = new five.Led(13);

	var led1ligado = false;

	setInterval(function() {
		if(led1ligado) {
			led1.off();
			led2.on();
		} else {
			led1.on();
			led2.off();
		}
		led1ligado = !led1ligado;
		console.log(( (led1ligado) ? 'led1' : 'led2' ) + 'diz: piuuuuuuuuuuuuuuuuuuuuuuuuuu');
	}, 2000);

});