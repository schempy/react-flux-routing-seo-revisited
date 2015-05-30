'use strict';

// make `.jsx` file requirable by node
require('node-jsx').install();

var express = require('express');
var app = express();
var port = 8080;
var path = require('path');

// create the view engine with `react-engine`
var engine = require('react-engine').server.create({
  reactRoutes: path.join(__dirname, '/lib/Routes.jsx')
});

// Set engine.
app.engine('.jsx', engine);

// Set the view directory
app.set('views', path.join(__dirname, '/lib/handlers'));

// Set jsx as the view engine
app.set('view engine', 'jsx');

// Set the custom view
app.set('view', require('react-engine/lib/expressView'));

// Set static directory.
app.use(express.static('static'));

// Routes
app.use('/', require('./lib/routes/index'));
app.use('/products', require('./lib/routes/products'));
app.use('/api', require('./lib/routes/api'));

var server = app.listen(port, function () {
    var host = server.address().address;

    console.log('Listening at http://%s:%s', host, port);
});
