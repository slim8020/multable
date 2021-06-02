import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';
class Input extends Component {
    
    constructor(props){

        super(props);
        this.state = {value:2};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="InputLabel">
                        <h1> What Times Table? </h1>
                        <input className="InputArea" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    {/* <input className="SubmitBtn" type="submit" value="Submit"/> */}
                </form>

                <Result number={this.state.value}/>
            </div>
        );
    }
}


export default Input;