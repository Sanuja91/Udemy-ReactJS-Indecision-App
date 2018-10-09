import React from 'react'

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
  
  
export default Action  