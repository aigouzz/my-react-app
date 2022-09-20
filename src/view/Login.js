import { checkLogin, throttle } from '../util/index'
import Header from './Header'
import Input from '@src/components/form/Input'
import React, { createRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tips from '@src/components/common/Tips/index'

function Login (props) {
    const [username, setUsername] = useState({
        name: 'username',
        title: '姓名:',
        value: '',
    });
    const TipsRef = createRef();
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
    const login = throttle(() => {
        let data = {
            username: username.value,
            password: password.value,
        };
        if (checkLogin(data)) {
            window.localStorage.setItem('username', data.username);
            tipsShow('登陆成功', () => {
                navigate('/home');
            });
        } else {
            tipsShow('输入有误，请重新输入');
        }
    }, 1000);
    function tipsShow (title, fn) {
        TipsRef.current.show(title);
        setTimeout(() => {
            TipsRef.current.hide();
            fn();
        }, 1000);
    }
    useEffect(() => {
        if (window.localStorage.getItem('username')) {
            navigate('/home');
        }
        return () => {};
    }, []);
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
        <Tips ref={TipsRef}></Tips>
        </>
    )
}
export default Login;