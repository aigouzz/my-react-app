import React from "react";

class Tips extends React.Component{
    constructor(props) {
        super(props);
        this.close = this.close.bind(this)
    }
    close() {

    }
    render() {
        return (
            <div className="tips">
                <div className="tips-text">{this.props.text}</div>
                <div className="tips-close" onClick={this.close}>x</div>   
            </div>
        );
    }
}

export default Tips;