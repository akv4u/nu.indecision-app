import React from 'react'

import Header from './Header.js'
import Action  from './Action.js'
import Options from './Options.js'
import AddOption from './AddOption.js'

// Changing App to class-properties syntax

export default class IndicisionApp extends React.Component {
    state = {
        options:[]
    }
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove != option)
        }));
    }
    
    handleRandomSelect = () => {
        const randIdx = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randIdx])
    }
    
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options:[]
            }
        })
        
        //
        // this.setState(() => {options:[]})
    }
    
    handleAddOption = (option) => {
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
