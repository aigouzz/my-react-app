import React from "react";
import Input from './Input'
import Checkbox from './Checkbox'
import Textarea from "./Textarea";
import { handleChange, checkForm} from '../../util/index'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                title: '姓名',
                value: '',
                name: 'username'
            },
            opinion: {
                title: '感想',
                value: '',
                name: 'opinion'
            },
            isCheck: {
                title: '接受',
                value: false,
                name: 'accept'
            },
        }
        this.handleChange = handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.uploadChange = this.uploadChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onOpinionChange = this.onOpinionChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
    }
    onUserChange(data) {
        this.setState({
            user: data
        });
    }
    onOpinionChange(data) {
        this.setState({
            opinion: data
        });
    }
    onCheckChange(data) {
        this.setState({
            isCheck: data
        });
    }
    submit(e) {
        e.preventDefault();
        if(checkForm(this.state)) {
            alert('成功');
        } else {
            alert('填写错误，请查看失误')
        }
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
                <Input list={this.state.user} onChange={this.onUserChange}></Input>
                <Textarea list={this.state.opinion} onChange={this.onOpinionChange}></Textarea>
                <Checkbox list={this.state.isCheck} onChange={this.onCheckChange}></Checkbox>
                <label>
                    <span>上传：</span>
                    {this.state.uploadImage ? <img src={this.state.uploadImage} alt='上传的图片'/> : ''}
                    <button className='home-form-uploadbg'>点击上传</button>
                    <input className='home-form-upload' type='file' onChange={this.uploadChange} multiple='multiple' />
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