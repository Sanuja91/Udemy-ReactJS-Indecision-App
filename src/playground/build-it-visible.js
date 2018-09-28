let visibility = false

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {" "}
        {visibility ? "Hide details" : "Show details"}
      </button>
      <p>{visibility ? "Hey. These are some details you can now see!" : ""}</p>
    </div>
  )
  ReactDOM.render(jsx, appRoute)
}

const onToggle = e => {
  e.preventDefault()
  if (visibility === true) {
    visibility = false
    render()
  } else {
    visibility = true
    render()
  }
}

const appRoute = document.getElementById("app")
render()
