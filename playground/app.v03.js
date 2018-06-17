class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleRandomSelect = this.handleRandomSelect.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options:[]
    }
  }

  // React Lifecycle methods. These are only fired for ClassBased component
  // and are not available for "Stateless functional components"
  componentDidMount() {
    console.log ('componentDidMount');
    try { // <= to catch any parsing error
      const json = localStorage.getItem('options')
      const options = JSON.parse (json)
      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevPros, prevState) {
    console.log ('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      console.log ('componentDidUpdate: savind data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount (){
    console.log ('component will unmount!')
  }
  
  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove != option)
    }));
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
        handleDeleteOption={this.handleDeleteOption}
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


const Option = (props) => {
  return (
    <div>
      {props.optionText} 
      <button 
        onClick={(e) => props.handleDeleteOption(props.optionText)}
      >
        <b>X</b>
      </button>
      </div>
    );
   
  }

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
  
  ReactDOM.render (<IndicisionApp />, document.getElementById('app'));
 
  