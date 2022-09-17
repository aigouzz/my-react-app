import React from "react";
import {handleChange} from '../../util/index'

class Checkbox extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = handleChange.bind(this);
    }
    handleChange
    render() {
        return (
            <label>
                <span>{this.props.list.title}</span>
                <input name={this.props.list.name} type='checkbox' value={this.props.list.value} onChange={this.handleChange} />
                <font>接受条款</font>
            </label>
        );
    }
}

export default Checkbox;