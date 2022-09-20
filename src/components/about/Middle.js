import React, { useState } from "react"
import Input from '../form/Input'

function AboutMiddle () {
    let [inputText, setInputText] = useState('');
    let [list, setList] = useState({
        title: '修改',
        value: '',
        name: 'change'
    });
    let changeInput = (data) => {
        setList(data);
        setInputText(data.value);
    };
    return (
        <div className="about-mid">
            <span>效果：{inputText}</span>
            <Input list={list} onChange={changeInput} />
        </div>
    );
}

export default AboutMiddle;