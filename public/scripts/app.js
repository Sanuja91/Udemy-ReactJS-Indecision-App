"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Living the life",
  options: ["One", "Two"]
};

var getLocation = function getLocation(location) {
  if (location) return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
};

var template = React.createElement(
  "div",
  null,
  app.title && React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  )
);

var user = {
  name: "Sanuja Cooray",
  age: 26,
  location: "Colombo"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Annonymous"
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: " + user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

// Required to start React
ReactDOM.render(template, appRoot);
