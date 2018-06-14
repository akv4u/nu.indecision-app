const app = {
    title: "Indicision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}
//JSX - Javascript XML, is javascript extention

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render()
    }
}

const onRemoveAll = () => {
    app.options = [];
    render()
}

const onMakeDecision = () => {
    const randomSel = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomSel];
    console.log (`option = ${option}`);
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            <p>{app.subtitle}</p>
            <p>{app.options && (app.options.length > 0)? 'Here are your options!' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision} disabled={!app.options.length}>What shall I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option, idx) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
            
        </div>);

    ReactDOM.render(template, appRoot)
}

render()