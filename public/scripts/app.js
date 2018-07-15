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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Omokaro Faith'
  ),
  React.createElement(
    'p',
    null,
    ' Age: 25'
  ),
  React.createElement(
    'p',
    null,
    ' Location: Nigeria'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
