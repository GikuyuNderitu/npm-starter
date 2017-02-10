'use strict'
//Import Dependencies
const express = require('express');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const db = require('./utils/db')(mongoose);
//Initialize express
const app = express()

//Start customized middleware
middleware(app, express)


// Connect to mongoose, Overwrite mpromise, mongoose's deprecated promise implementation
// mongoose.connect('mongodb://localhost/basic_mongoose')
mongoose.Promise = global.Promise


//Set up routes
app.get('/', function (req, res) {
	console.log('Hit home route');
	res.render('index')
})

app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
