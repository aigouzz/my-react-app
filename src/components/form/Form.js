import React, { createRef } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Textarea from './Textarea'
import Tips from '../common/Tips/index'
import { handleChange, checkForm, throttle} from '../../util/index'
import {PostFormUpload, PostImageUpload} from '@src/api/url'

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
        this.TipsRef = createRef();
        this.handleChange = handleChange.bind(this);
        this.submitWrap = this.submitWrap.bind(this);
        this.uploadChange = this.uploadChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(data) {
        this.setState({
            [data.name]: data
        });
    }
    submitWrap=throttle(this.submit, 1000)
    submit(e) {
        e.preventDefault();
        if(checkForm(this.state)) {
            const data = {
                username: this.state.user.value,
                opinion: this.state.opinion.value,
                checked: this.state.isCheck.value,
            };
            PostFormUpload(data).then((data) => {
                console.log(data);
                this.onShow(data.data.message);
            }, (err) => {
                this.onShow(err);
            });
        } else {
            this.onShow('输入有失误，请重新输入');
        }
    }
    onShow(title) {
        this.TipsRef.current.show(title);
        setTimeout(() => {
            this.onClose();
        }, 1000);
    }
    onClose = () => {
        this.TipsRef.current.hide();
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
                });
            }
        }
    }
    upload=(e) => {
        e.preventDefault();
        let uploadImage = this.state.uploadImage;
        if(uploadImage) {
            PostImageUpload({
                image: uploadImage
            }).then((data) => {
                console.log(data)
                this.onShow(data.data.message);
            }, (err) => {
                this.onShow(err);
            }).finally(() => {
                this.setState({
                    uploadImage: ''
                });
            });
        } else {
            this.onShow('还没有上传文件哦');
        }
    }
    render() {
        return (
            <>
            <div className="home-form">
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
                    <button className='submit' onClick={this.submitWrap}>提交</button>
                </label>
            </div>
            <Tips ref={this.TipsRef}></Tips>
            </>
        );
    }
}

export default Form;