import React from 'react'
import Option from './Option'

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

export default Options