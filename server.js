'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const app = express()

//DB stuff
require('./server/config/mongoose');

// Route and route logic
require('./server/config/routes')(app)

//Start customized middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
require('./server/config/middleware')(app)


app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
