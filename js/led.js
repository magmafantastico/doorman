var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	//var led2 = new five.Led(2);
	//
	//var led2ligado = false;
	//
	//setInterval(function() {
	//
	//	if(led2ligado) {
	//		led2.off();
	//	} else {
	//		led2.on();
	//	}
	//	led2ligado = !led2ligado;
	//	console.log(led2ligado);
	//
	//}, 2000);

	for (var i = 0; i < 15; i++) {
		var led = new five.Led(i);
		led.on();
		console.log('led ' + i + ': on');
	}

});