console.log("App.js is running")

const app = {
  title: "Indecision App",
  subtitle: "Living the life",
  options: ["One", "Two"]
}

const getLocation = location => {
  if (location) return <p>Location: {location}</p>
}

const template = (
  <div>
    {app.title && <h1>{app.title}</h1>}
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
  </div>
)

let count = 0
const plusButton = "plus_button"
const minusButton = "minus_button"
const resetButton = "reset_button"

const addOne = () => {
  console.log("addOne")
}

const minusOne = () => {
  console.log("minusOne")
}

const reset = () => {
  console.log("reset")
}

const templateTwo = (
  <div>
    <h1> Count: {count}</h1>
    <button id={minusButton} className="button" onClick={minusOne}>
      -1
    </button>
    <button id={plusButton} className="button" onClick={addOne}>
      +1
    </button>
    <button id={resetButton} className="button" onClick={reset}>
      reset
    </button>
  </div>
)

const appRoot = document.getElementById("app")

// Required to start React
ReactDOM.render(templateTwo, appRoot)
