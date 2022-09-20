import React from "react";
import { handleChange } from '../../util/index'

class Input extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = handleChange.bind(this);
    }

    handleChange
    render () {
        return (
            <label>
                <span>{this.props.list.title}</span>
                <input name={this.props.list.name} type='text'
                value={this.props.list.value} onChange={this.handleChange} />
            </label>
        );
    }
}

export default Input;