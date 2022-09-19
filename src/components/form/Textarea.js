import React from "react";
import {handleChange} from '../../util/index'

class Textarea extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = handleChange.bind(this);
        // console.log(this.findDOMNode())
    }
    render() {
        return (
            <label>
                <span>{this.props.list.title}</span>
                <textarea name={this.props.list.name} value={this.props.list.value} onChange={this.handleChange} ></textarea>
            </label>
        );
    }
}

export default Textarea;