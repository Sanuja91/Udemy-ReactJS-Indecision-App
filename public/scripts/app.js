"use strict";

var visibility = false;

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onToggle },
      " ",
      visibility ? "Hide details" : "Show details"
    ),
    React.createElement(
      "p",
      null,
      visibility ? "Hey. These are some details you can now see!" : ""
    )
  );
  ReactDOM.render(jsx, appRoute);
};

var onToggle = function onToggle(e) {
  e.preventDefault();
  if (visibility === true) {
    visibility = false;
    render();
  } else {
    visibility = true;
    render();
  }
};

var appRoute = document.getElementById("app");
render();
