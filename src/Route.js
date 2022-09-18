import {HashRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './view/Home'
import Form from './components/form/Form'

export function Routers() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/home' element={<Home></Home>}></Route>
                <Route exact path='/form' element={<Form></Form>}></Route>
                <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
            </Routes>
        </HashRouter>
    );
}