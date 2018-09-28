"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
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

var onFormSubmit = function onFormSubmit(e) {
  // Stops full page refresh
  e.preventDefault();

  // Gets value
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  console.log(app.options);
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item One"
      ),
      React.createElement(
        "li",
        null,
        "Item Two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
