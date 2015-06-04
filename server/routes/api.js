'use strict';

var express = require('express');
var router = express.Router();
var products = require('../data/products');

router.get('/products/:category', function(req, res) {
	res.status(200).json(products[req.params.category]);
});

module.exports = router;
