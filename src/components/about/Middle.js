import React, { useState } from "react"
import Input from '../form/Input'
import { AboutMiddleList } from "./common/MiddleList";

function AboutMiddle () {
    let [midList, setMidList] = useState([]);
    let [list, setList] = useState({
        title: '任务',
        value: '',
        name: 'addMore'
    });
    let changeInput = (data) => {
        setList(data);
    };
    let deleteItem = (id) => {
        let originArr = [...midList];
        let index = null;
        for (let i in originArr) {
            if (originArr[i].id === id) {
                index = i;
                break;
            }
        }
        originArr.splice(index, 1);
        setMidList(originArr);
    }
    let addNew = () => {
        if (list.value) {
            let originArr = [...midList];
            originArr.push({
                id: (+new Date()).toString(),
                title: list.value
            });
            setMidList(originArr);
            setList({
                title: '任务',
                value: '',
                name: 'addMore'
            });
        }
    }
    return (
        <div className="about-mid">
            <ul>
                <AboutMiddleList list={midList} onDelete={deleteItem}></AboutMiddleList>
            </ul>
            <Input list={list} onChange={changeInput} />
            <button onClick={addNew}>添加</button>
        </div>
    );
}

export default AboutMiddle;