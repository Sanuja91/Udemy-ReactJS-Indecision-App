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

const user = {
  name: "Sanuja Cooray",
  age: 26,
  location: "Colombo"
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Annonymous"}</h1>
    {user.age >= 18 && <p>{`Age: ${user.age}`}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById("app")

// Required to start React
ReactDOM.render(template, appRoot)
