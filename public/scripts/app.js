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

var count = 0;
var plusButton = "plus_button";
var minusButton = "minus_button";
var resetButton = "reset_button";

var addOne = function addOne() {
  count++;
  console.log("addOne", count);
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  console.log("minusOne", count);
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " Count: ",
      count
    ),
    React.createElement(
      "button",
      { id: minusButton, className: "button", onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { id: plusButton, className: "button", onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { id: resetButton, className: "button", onClick: reset },
      "reset"
    )
  );

  // Required to start React
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
