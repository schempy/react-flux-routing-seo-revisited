'use strict';

var express = require('express');
var router = express.Router();
var categories = require('../../data/categories');

router.get('/', function(req, res) {
	res.render(req.url, {
		categories: categories
	});
});

module.exports = router;
