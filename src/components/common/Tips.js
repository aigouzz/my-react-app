import React from "react"
import { createPortal } from "react-dom";

class Tips extends React.Component{
    constructor(props) {
        super(props);
        this.div = document.createElement('div');
    }
    componentDidMount() {
        document.body.appendChild(this.div);
    }
    componentWillUnmount() {
        document.body.removeChild(this.div);
        this.div = null;
    }
    render() {
        return createPortal(this.props.children, this.div);
    }
}

export default Tips;