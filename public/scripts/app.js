'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'DOES THIS CHANGE?'
  ),
  React.createElement(
    'h2',
    null,
    'The React Way'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
