import React from 'react'
import Option from './Option.js'

const Options = (props) => {
    return (
      <div>
      {
          <button 
            onClick={props.handleDeleteOptions}
            disabled={props.options.length == 0}
          >Remove All
          </button>
      }
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option 
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
       ))
      }
      </div>
    )
  }

  export default Options;