var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router.js');
var db = require('./db/db.js');

var app = express();

var logger = (req, res, next) => {
	console.log(`Received ${req.method} request at ${req.originalUrl}`);
	next();
};

app.use(logger);
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use('/', router);


var port = process.env.port || 3000;
app.listen(port, () =>
	console.log(`now listening on ${port}`)
);
