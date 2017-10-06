// set up ======================================================================
var express = require('express'),
app = express(), 	// create our app w/ express
port = process.env.PORT || 8080, 				// set the port
morgan = require('morgan'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');


// configuration ===============================================================
app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/routes.js')(app);
var server = require('http').createServer(app);

// listen (start app with node server.js) ======================================
// app.listen(port);
server.listen(port);

console.log("App listening on port " + port);
