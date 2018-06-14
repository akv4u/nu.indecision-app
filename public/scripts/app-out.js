class IndicisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomSelect = this.handleRandomSelect.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleRandomSelect() {
    const randIdx = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randIdx]);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });

    //
    // this.setState(() => {options:[]})
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return React.createElement(
      'div',
      null,
      React.createElement(Header, { subtitle: subtitle }),
      React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handleRandomSelect: this.handleRandomSelect
      }),
      React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions
      }),
      React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      })
    );
  }
}

const Header = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};
// default props can be defind for class based as well as functional components
// just by definig the objects
Header.defaultProps = {
  title: 'Indecision'
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

};const Action = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handleRandomSelect,
        disabled: !props.hasOptions
      },
      'What should I do'
    )
  );
};

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

const Options = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(option => React.createElement(Option, { option: option })),
    React.createElement(Option, null)
  );
};

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

const Option = props => {
  return React.createElement(
    'div',
    null,
    props.option && React.createElement(
      'li',
      { key: props.option },
      props.option
    )
  );
};

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
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) e.target.elements.option.value = '';
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.handleAddOption },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      ),
      this.state.error && React.createElement(
        'p',
        null,
        this.state.error
      )
    );
  }
}

ReactDOM.render(React.createElement(IndicisionApp, null), document.getElementById('app'));

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
