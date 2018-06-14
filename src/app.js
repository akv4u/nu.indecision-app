class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleRandomSelect = this.handleRandomSelect.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options:[]
    }
  }
  
  handleRandomSelect() {
    const randIdx = Math.floor(Math.random()*this.state.options.length)
    alert(this.state.options[randIdx])
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options:[]
      }
    })
    
    //
    // this.setState(() => {options:[]})
  }
  
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist'
    }
    this.setState((prevState) => {
      return {
        options:prevState.options.concat(option)
      }
    })
  }
  
  
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action 
      hasOptions={this.state.options.length > 0}
      handleRandomSelect={this.handleRandomSelect}
      />
      <Options 
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption 
      handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }    
}



const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
  );
}
// default props can be defind for class based as well as functional components
// just by definig the objects
Header.defaultProps = {
  title: 'Indecision'
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
    <button 
    onClick={props.handleRandomSelect}
    disabled={!props.hasOptions}
    >What should I do</button>
    </div>
  )
}

// Class Based component (see above stateless functional component)
// class Action extends React.Component {
//   render () {
//     return (
//       <div>
//         <button 
//             onClick={this.props.handleRandomSelect}
//             disabled={!this.props.hasOptions}
//         >What should I do</button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.map((option) => <Option option={option}/>)}
    <Option />
    </div>
  )
}


// class Options extends React.Component {
//   render () {
//     return (
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       {this.props.options.map((option) => <Option option={option}/>)}
//       <Option />
//       </div>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div>
    {props.option && 
      <li key={props.option}>{props.option}</li>}
      </div>
    );
    
  }
  
  
  // class Option extends React.Component {
  //     render () {
  //         return (
  //             <div>
  //                 {this.props.option && 
  //                 <li key={this.props.option}>{this.props.option}</li>}
  //             </div>
  //         );
  //     }
  // }
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        error : undefined
      }
    }
    handleAddOption (e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option)
      if (!error) e.target.elements.option.value = ''
      this.setState (()=> {
        return {error}
      });
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
  
  ReactDOM.render (<IndicisionApp />, document.getElementById('app'));
  
  // // stateless component
  // const User = (props) => {
  //   return (
  //     <div>
  //       <p>Name: {props.name}</p>
  //       <p>Age: {props.age}</p>
  //     </div>
  //   )
  // }
  
  // ReactDOM.render (<User name='amit' age='12' />, document.getElementById('app'));
  