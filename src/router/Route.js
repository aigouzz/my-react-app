import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '@src/view/Home'
import About from '@src/view/About'
import Form from '@src/view/Form'
import Login from '@src/view/Login';

export function Routers () {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/home' element={<Home></Home>}></Route>
                <Route exact path='/about' element={<About></About>}></Route>
                <Route exact path='/form' element={<Form></Form>}></Route>
                <Route exact path='/login' element={<Login></Login>}></Route>
                <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
            </Routes>
        </HashRouter>
    );
}