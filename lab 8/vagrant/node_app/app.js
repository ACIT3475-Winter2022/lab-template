var express = require('express');
var app = express();
var http = require('http').createServer(app);

http.listen(9000);
console.log('App running at http://0.0.0.0' + ':' + '9000' + '/');

app.get('/', (req, res) => {
	console.log(req.headers);
	var max = 999999999
	var num = Math.sqrt(Math.random() * max) + 1;
	var s = "Today's random number is: " + num;
	res.status('200').send(s);
});
