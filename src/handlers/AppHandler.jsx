'use strict';

var React = require('react');
var Router = require('react-router');
var Layout = require('../components/Layout.jsx');

var AppHandler = React.createClass({
    render: function() {
        return (
            <Layout {...this.props} >
                <Router.RouteHandler {...this.props} />
            </Layout>
        );
    }
});

module.exports = AppHandler;
