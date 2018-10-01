let visibility = false
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: true
    }
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      if (prevState.visibility) return { visibility: false }
      else return { visibility: true }
    })
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}> {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        <p>
          {this.state.visibility ? "Hey. These are some details you can now see!" : ""}
        </p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>
//         {" "}
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       <p>{visibility ? "Hey. These are some details you can now see!" : ""}</p>
//     </div>
//   )
//   ReactDOM.render(jsx, appRoute)
// }

// const onToggle = e => {
//   e.preventDefault()
//   if (visibility === true) {
//     visibility = false
//     render()
//   } else {
//     visibility = true
//     render()
//   }
// }

// const appRoute = document.getElementById("app")
// render()
