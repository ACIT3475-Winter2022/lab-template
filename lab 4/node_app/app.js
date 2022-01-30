var express = require('express');
var app = express();
var http = require('http').createServer(app);

http.listen(9000);
console.log('App running at http://0.0.0.0' + ':' + '9000' + '/');

app.get('/', (req, res) => {
	console.log(req.headers)
	res.send(req.headers)
});
