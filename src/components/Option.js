import React from "react"

// Stateless functional component
const Option = props => (
  <div>
    {props.optionText}
    <button
      onClick={e => {
        props.handleDeleteOption(props.optionText)
      }}
      className = "button button--link"
    >
      remove
    </button>
  </div>
)

export default Option
