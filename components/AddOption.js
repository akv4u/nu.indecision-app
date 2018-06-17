import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error : undefined
  }
  constructor(props) {
    super(props)
  }
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    if (!error) e.target.elements.option.value = ''
    this.setState (()=> ({error}));
  }
  render () {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
      <input type='text' name='option'/>
      <button>Add Option</button>
      </form> 
      {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
  
}