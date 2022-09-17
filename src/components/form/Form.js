import React from "react";
import { handleChange } from '../../util/index'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            opinion: '',
            uploadImage: ''
        }
        this.handleChange = handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.uploadChange = this.uploadChange.bind(this);
    }
    submit(e) {
        e.preventDefault();
        console.log(this.state.name, this.state.opinion);
    }
    uploadChange(e) {
        console.log(e.target.files)
        let file = e.target.files[0];
        if(!!file) {
            let reader = new FileReader();
            reader.readAsDataURL(file, 'utf-8');
            reader.onload = () => {
                console.log(reader.result)
                this.setState({
                    uploadImage: reader.result
                })
            }
        }
    }
    upload() {

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
                    <text>上传：</text>
                    {this.state.uploadImage ? <img src={this.state.uploadImage} alt='上传的图片'/> : ''}
                    <input type='file' onChange={this.uploadChange} multiple='multiple' />
                    <button onClick={this.upload}>上传</button>
                </label>
                <label>
                    <input type='submit' value='提交'/>
                </label>
            </form>
        );
    }
}

export default Form;