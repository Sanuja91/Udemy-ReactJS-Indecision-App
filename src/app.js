console.log("App.js is running")

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
}

const getLocation = location => {
  if (location) return <p>Location: {location}</p>
}

const onFormSubmit = e => {
  // Stops full page refresh
  e.preventDefault()

  // Gets value
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ""
    render()
  }
}

const onRemoveAll = () => {
  app.options = []
  console.log(app.options)
  render()
}

const appRoot = document.getElementById("app")

const render = () => {
  const template = (
    <div>
      {app.title && <h1>{app.title}</h1>}
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()
