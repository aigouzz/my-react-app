import React from "react"
import { createPortal } from "react-dom";

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.div = document.createElement('div');
        this.div.className = 'modal-tips';
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

export default Modal;