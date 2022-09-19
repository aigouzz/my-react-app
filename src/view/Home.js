import * as React from 'react'
import HomeMiddle from '../components/home/HomeMiddle'
import Form from '../components/form/Form'
import Header from './Header'
const HomePage = React.lazy(() => import('../components/home/HomePage'))


class Home extends React.Component {
    render() {
        return (    
            <>
            <Header></Header>
            <div className='home-container'>
                <React.Suspense fallback={<div>...loading</div>}>
                    <HomePage></HomePage>
                </React.Suspense> 
                <HomeMiddle></HomeMiddle>
                <Form></Form>
            </div>
            </>
        )
    }
}

export default Home;