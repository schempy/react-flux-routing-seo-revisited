'use strict';

var React = require('react');
var CategoryList = require('./CategoryList.jsx');

var Layout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          <CategoryList categories={this.props.categories} />
          {this.props.children}
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});

module.exports = Layout;
