import { checkLogin } from '../util/index'
import { PostLogin } from '../api/url'
import Header from './Header'
import Input from '@src/components/form/Input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login (props) {
    const [username, setUsername] = useState({
        name: 'username',
        title: '姓名:',
        value: '',
    });
    const navigate = useNavigate();
    const [password, setPassword] = useState({
            name: 'password',
            title: '密码:',
            value: '',
        });
    function handleChange (res) {
        if (res.name === 'username') {
            setUsername(res);
        } else {
            setPassword(res);
        }
    }
    function login () {
        let data = {
            username: username.value,
            password: password.value,
        };
        if (checkLogin(data)) {
            localStorage.setItem('username', data.username);
            navigate('/home');
        } else {
            alert('输入有误，请重新输入');
        }
    }
    if (localStorage.getItem('username')) {
        navigate('/home');
    }
    return (
        <>
        <Header></Header>
        <div className='login'>
            <div className='login-inner'>
                <div className='login-inner-text'>
                    <Input list={username} onChange={handleChange}></Input>
                </div>
                <div className='login-inner-text'>
                    <Input list={password} onChange={handleChange}></Input>
                </div>
                <div className='login-inner-text'>
                    <button onClick={login}>登陆</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;