var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function() {


	var sensor = new five.Sensor({
		pin: 'A2',
		freq: 800
	});

	board.repl.inject({
		pot: sensor
	});

	sensor.scale(0, 10).on('data', function() {
		console.log(this.value, this.raw);

		//var volts = ( this.value / 1023) * 5000;
		//console.log( (volts - .5) );

		//var temp;
		//
		//temp = this.value * 5 / 1024;
		//temp = temp - .5;
		//temp = temp / .01;
		//
		//console.log(temp);

	});

	//var temperature = new five.Temperature({
	//	pin: 'A2'
	//});
	//
	//temperature.on("change", function(err, data) {
	//	console.log("celsius: %d", data);
	//});

});