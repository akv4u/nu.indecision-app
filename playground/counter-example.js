class Counter extends React.Component {
  constructor (props) {
    super (props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

// Using reach lifecycle methods
  componentDidMount() {
    console.log('componentDidMount')
    let count = parseInt(localStorage.getItem('count'), 10);
    if (!isNaN(count)) {
      this.setState(() => ({count}));
    }
  }

  componentDidUpdate(props, prevState) {
    console.log('componentDidUpdate')

    // if there is a change in count, store it
    if (this.state.count !== prevState.count) {
      console.log ('Saving count changes visa componentDidUpdate')
      localStorage.setItem ('count', this.state.count);
    }
  }

  handleAddOne () {
    this.setState((prevState) => {
      return { // Only updates the value provided, keeps rest of the object as is.
        count : prevState.count + 1
      }
    })
  }
  handleMinusOne () {
    this.setState((prevState) => {
      return {
        count : prevState.count - 1
      }
    })
  }
  handleReset () {
    this.setState((prevState) => {
      return {
        count : 0
      }
    })    
  }
  render () {
    return (<div>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
    </div>)
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

