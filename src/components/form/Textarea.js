import React from "react";
import {handleChange} from '../../util/index'

class Textarea extends React.Component{
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
            <textarea value={this.state.value} onChange={this.handleChange} ></textarea>
        );
    }
}

export default Textarea;