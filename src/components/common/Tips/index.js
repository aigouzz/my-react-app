import React, { createRef } from 'react';
import Modal from './Tips.js'

class Tips extends React.Component {
    constructor(props) {
        super(props);
        this.TipsRef = createRef();
        this.state = {
            isShow: false,
            title: ''
        };
    }
    show = (title) => {
        this.setState({
            isShow: true,
            title,
        });
    }
    hide= () => {
        this.setState({
            isShow: false,
            title: ''
        });
    }
    render() {
        return (
            <>
            {this.state.isShow ? (
                <Modal>
                    <div className='modal-tips-text'>{this.state.title}</div>
                    <i onClick={this.onClose}>x</i>
                </Modal>
            ) : ''}
            </>
        );
    }
}

export default Tips;