import React from "react";
import { handleChange } from '../../util/index'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            opinion: ''
        }
        this.handleChange = handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        console.log(this.state.name, this.state.opinion);
    }
    render() {
        return (
            <form className="home-form" onSubmit={this.submit}>
                <label>
                    <text>姓名：</text>
                    <input type='text' name='name' value={this.state.name} 
                    onChange={this.handleChange} placeholder='请输入您的姓名'/>    
                </label>
                <label>
                    <text>感想：</text>
                    <textarea name='opinion' value={this.state.opinion}
                    onChange={this.handleChange} placeholder='请输入感想'></textarea>
                </label>
                <label>
                    <input type='submit' value='提交'/>
                </label>
            </form>
        );
    }
}

export default Form;