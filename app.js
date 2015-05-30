'use strict';

var React = require('react');
var Routes = require('./lib/Routes.jsx');
var Client = require('react-engine/lib/client');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

// Include all view handler files. Browerify doesn't do
// this automatically as it can only operate on
// static require statements.
require('./lib/handlers/*.jsx', {glob: true});

// boot options
var options = {
    routes: Routes,

    // supply a function that can be called
    // to resolve the file that was rendered.
    viewResolver: function(viewName) {
        return require('./lib/handlers/' + viewName);
    }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
});
