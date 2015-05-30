'use strict';

var React = require('react');
var Router = require('react-router');
var AppHandler = require('./handlers/AppHandler.jsx');
var ProductHandler = require('./handlers/ProductHandler.jsx');

/**
 * Define routes. Each route will have a handler to deal with the
 * route.
 */
var Routes = (
	<Router.Route name="app" path="/" handler={AppHandler}>
		<Router.Route name="products" path="/products/:category" handler={ProductHandler} />
	</Router.Route>
);

module.exports = Routes;
