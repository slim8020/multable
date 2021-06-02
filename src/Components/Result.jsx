import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
    constructor(props){
        super(props);
        this.state= {num :2};
    }

    calc(a,b){
        return a * b;
    }

    render() {
        let i = this.props.number;
        return (
            <div>
               <h1>{i} x 1 = {this.calc(i,1)}</h1>
               <h1>{i} x 2 = {this.calc(i,2)}</h1>
               <h1>{i} x 3 = {this.calc(i,3)}</h1>
               <h1>{i} x 4 = {this.calc(i,4)}</h1>
               <h1>{i} x 5 = {this.calc(i,5)}</h1>
               <h1>{i} x 6 = {this.calc(i,6)}</h1>
               <h1>{i} x 7 = {this.calc(i,7)}</h1>
               <h1>{i} x 8 = {this.calc(i,8)}</h1>
               <h1>{i} x 9 = {this.calc(i,9)}</h1>
            </div>
        );
    }
}

Result.propTypes={ number: PropTypes.number, };

export default Result;