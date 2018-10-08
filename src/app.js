class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    // Bind anything that you want to pass downstream
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: ["Thing one", "Thing two", "Thing four"]
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option)
      return 'Enter valid value to add item'
    else if (this.state.options.indexOf(option) > -1)
      return 'This option already exists'

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer"
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          // Can pass method onto sub-component
          handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

// Stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

// // Stateful functional component
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }

// Stateless functional component
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
        </button>
    </div>
  )
}

// Stateless functional component
const Options = props => {
  return (
    // Calls handleDeleteOptions that was passed down from IndecisionApp
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => {
        return <Option key={option} optionText={option} />
      })}
    </div>
  )
}

// Stateless functional component
const Option = props => {
  return (
    <div>
      <p>Option: {props.optionText}</p>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
