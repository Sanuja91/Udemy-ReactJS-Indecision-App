class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    // Bind anything that you want to pass downstream
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  // Component lifecycle methods!
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options)
        this.setState(() => ({ options }))
    }
    catch (e) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
    console.log('Component did Update!')
  }
  
  componentWillUnmount() {
    console.log('Component will Unmount')
  }

  handleDeleteOptions() {
    // Returns implicit objects and not function body
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
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

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  render() {
    const subtitle = "Put your life in the hands of a computer"
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          // Can pass method onto sub-component
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ["Thing one", "Thing two", "Thing four"]
}

// Stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
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
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      })
      }
    </div>
  )
}

// Stateless functional component
const Option = props => {
  return (
    <div>
      <p>Option: {props.optionText}</p>
      <button onClick={e => {
        props.handleDeleteOption(props.optionText)
      }}
      >
        remove
      </button>
    </div >
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = ({ error: undefined })
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))

    if (!error)
      e.target.elements.option.value = ''
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
