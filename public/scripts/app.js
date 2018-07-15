"use strict";

var user = {
  name: "Omokaro Faith",
  age: 25,
  location: "Lagos, Nigeria"
};

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    user.age
  ),
  React.createElement(
    "p",
    null,
    user.location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
