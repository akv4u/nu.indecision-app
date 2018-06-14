// const app = {
//     title: "Visibility Toggle"
// }

// let visiblity = true;
// const message = "This is secret message";

// const onToggleVisibility = () => {
//     visiblity = !visiblity;
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>{app.title}</h1> 
//             <button onClick={onToggleVisibility}>{visiblity ? "Hide" : "Show"} message</button>
//             {visiblity && (
//                 <p>{message}</p>
//             )}
            

//         </div>);
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

class TheVisibilityApp extends React.Component {
    render () {
        return (
            <div>
            <Header title={this.title} />
            <Toggle  text={this.text} />
            </div>
        );

    }
}

class Header extends React.Component {
    render () {
        return (
            <div>
            <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class Message extends React.Component {
    render () {
        return (
            <div>
            <p>{this.props.text}</p>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor (props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind (this)
        this.state = {
            visible:true
        }
    }
    toggleVisibility () {
        // this.setState (prevState => {visible : !prevState.visible})
        this.setState ((prevState) => {
            return {
                visible : !prevState.visible
            }
        })
    }
    render () {
        const message = 'This is secret message!'
        return (
            <div>
            <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide' : 'Show'}</button>
            {this.state.visible && <p>{message}</p>}
            </div>
        );
    }
}

ReactDOM.render (<TheVisibilityApp />, document.getElementById ('app'))