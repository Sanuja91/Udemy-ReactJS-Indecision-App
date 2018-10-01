class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    // Default state
    this.state = {
      count: 0
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  handleMinusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  handleReset() {
    this.setState(() => {
      return { count: 0 }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0
// const plusButton = "plus_button"
// const minusButton = "minus_button"
// const resetButton = "reset_button"

// const addOne = () => {
//   count++
//   console.log("addOne", count)
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--
//   console.log("minusOne", count)
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   console.log("reset")
//   renderCounterApp()
// }

// const renderCounterApp =()=>{
//   const templateTwo = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button id={minusButton} className="button" onClick={minusOne}>
//         -1
//       </button>
//       <button id={plusButton} className="button" onClick={addOne}>
//         +1
//       </button>
//       <button id={resetButton} className="button" onClick={reset}>
//         reset
//       </button>
//     </div>
//   )
//   const appRoot = document.getElementById("app")
// // Required to start React
// ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
