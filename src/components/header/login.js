import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderLogin () {
    let [name, setName] = useState(localStorage.getItem('username'));
    function logout () {
        localStorage.removeItem('username');
        setName(localStorage.getItem('username'));
    }
    return (
        <div className='header-login'>
            {name ? (<Fragment>
                <span>你好，{name}</span><button onClick={logout}>退出</button>
            </Fragment>) : (<Link to='/login'>去登陆</Link>)}
        </div>
    )
}

export default HeaderLogin