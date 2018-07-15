"use strict";

var user = {
  name: "Omokaro Faith",
  age: 25,
  location: "Lagos, Nigeria"
};

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ['One', 'Two']
};

var getLocation = function getLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    "Location: ",
    location
  ) : "";
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? "Here are your options" : "No options"
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
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
