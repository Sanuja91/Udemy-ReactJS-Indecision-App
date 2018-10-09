import React from 'react'

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

  export default Option
  