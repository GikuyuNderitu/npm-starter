'use strict'
//Import Dependencies
const express = require('express');
const middleware = require('./utils/middleware');
//Initialize express
const app = express()

//Start customized middleware
middleware(app, express)


//Set up routes
app.get('/', function (req, res) {
	console.log('Hit home route');
	res.render('index')
})

app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
