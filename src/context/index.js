import React from "react"

export const FormContext = React.createContext({
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
});
export const UserContext = React.createContext({});
