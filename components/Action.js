import React from "react"

const Action = (props) => (
  <div>
  <button 
    onClick={props.handleRandomSelect}
    disabled={!props.hasOptions}
  >What should I do</button>
  </div>
)

export default Action
