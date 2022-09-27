import React, { Suspense } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '@src/view/Home'
const About = React.lazy(() => import(
    /* webpackChunkName: 'about' */
    '@src/view/About'))
const Form = React.lazy(() => import(
    /* webpackChunkName: 'about' */
    '@src/view/Form'))
const Login = React.lazy(() => import(
    /* webpackChunkName: 'about' */
    '@src/view/Login'))
const EditPage = React.lazy(() => import(
    /* webpackChunkName: 'about' */
    '@src/view/EditPage'))

export function Routers () {
    return (
        <Suspense fallback={<div>...loading</div>}>
        <HashRouter>
            <Routes>
                <Route exact path='/home' element={<Home></Home>}></Route>
                <Route exact path='/about' element={<About></About>}></Route>
                <Route exact path='/form' element={<Form></Form>}></Route>
                <Route exact path='/login' element={<Login></Login>}></Route>
                <Route exact path='/edit' element={<EditPage></EditPage>}></Route>
                <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
            </Routes>
        </HashRouter>
        </Suspense>
    );
}