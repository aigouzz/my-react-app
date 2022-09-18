import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Textarea from './Textarea'
import { handleChange, checkForm} from '../../util/index'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                title: '姓名',
                value: '',
                name: 'user'
            },
            opinion: {
                title: '感想',
                value: '',
                name: 'opinion'
            },
            isCheck: {
                title: '接受',
                value: false,
                name: 'isCheck'
            },
        }
        this.handleChange = handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.uploadChange = this.uploadChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(data) {
        this.setState({
            [data.name]: data
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
                <Input list={this.state.user} onChange={this.onValueChange}></Input>
                <Textarea list={this.state.opinion} onChange={this.onValueChange}></Textarea>
                <Checkbox list={this.state.isCheck} onChange={this.onValueChange}></Checkbox>
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