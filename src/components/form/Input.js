import React from "react";
import {handleChange} from '../../util/index'

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange
    render() {
        return (
            <input type='text' value={this.state.value} onChange={this.handleChange} />
        );
    }
}

export default Input;