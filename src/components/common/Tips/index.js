import React, { createRef } from 'react';
import Modal from './Tips.js'

class Tips extends React.Component {
    constructor(props) {
        super(props);
        this.TipsRef = createRef();
        this.state = {
            isShow: false
        };
    }
    show = () => {
        this.setState({
            isShow: true
        });
    }
    hide= () => {
        this.setState({
            isShow: false
        });
    }
    render() {
        return (
            <>
            {this.state.isShow ? (
                <Modal ref={this.TipsRef}>
                    <div className='modal-tips-text'>{this.props.title}</div>
                    <i onClick={this.onClose}>x</i>
                </Modal>
            ) : ''}
            </>
        );
    }
}

export default Tips;