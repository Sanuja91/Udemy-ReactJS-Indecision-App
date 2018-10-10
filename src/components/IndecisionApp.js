import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handleDeleteOptions = () => {
    // Returns implicit objects and not function body
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: option }))
  }

  handleAddOption = option => {
    if (!option) return "Enter valid value to add item"
    else if (this.state.options.indexOf(option) > -1)
      return "This option already exists"

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  // Component lifecycle methods!
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if (options) this.setState(() => ({ options }))
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
    }
    console.log("Component did Update!")
  }

  componentWillUnmount() {
    console.log("Component will Unmount")
  }

  render() {
    const subtitle = "Put your life in the hands of a computer"
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              // Can pass method onto sub-component
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    )
  }
}
