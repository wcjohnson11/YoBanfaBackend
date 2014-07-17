// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure app
app.use(bodyParser());

var port     = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');
var connectionString = "mongodb://localhost/api";
mongoose.connect(connectionString);

// mongoose.connect('mongodb://MongoLab-n:veHyLFYisbvi1KKOCFH_VVoqvjyzQdvfsvJDIb71qiw-@ds050077.mongolab.com:50077/MongoLab-n'); // connect to our database
var Card     = require('./api/Cards/cardModel.js');
var cardRouter = require('./api/Cards/cardRoutes.js');
var gameRouter = require('./api/Games/gameRoutes.js');
// var userRouter = require('./api/Users/userRoutes.js');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});


//Set up our routes
router.use('/cards', cardRouter);
router.use('/games', gameRouter);
router.use('/users', userRouter);


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
