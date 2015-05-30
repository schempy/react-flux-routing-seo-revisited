'use strict';

var express = require('express');
var router = express.Router();
var products = require('../../data/products');
var categories = require('../../data/categories');

router.get('/:product', function(req, res) {
	res.render('/products' + req.url, {
		categories: categories,
		products: products[req.params.product]
	});
});

module.exports = router;
