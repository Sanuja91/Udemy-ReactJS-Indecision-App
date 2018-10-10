import React from "react"

// Stateless functional component
const Option = props => (
  <div className="option">
  <p className="option__text">    {props.count}. {props.optionText}</p>
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
