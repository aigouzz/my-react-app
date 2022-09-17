import * as React from 'react'
import Banner from '../components/home/Banner'
import HomeMiddle from '../components/home/HomeMiddle'
import Form from '../components/form/Form'
const HomePage = React.lazy(() => import('../components/home/HomePage'))


class Home extends React.Component {
    render() {
        return (    
        <div className='home-container'>
            <Banner></Banner>
            <React.Suspense fallback={<div>...loading</div>}>
                <HomePage></HomePage>
            </React.Suspense> 
            <HomeMiddle></HomeMiddle>
            <Form></Form>
        </div>
        )
    }
}

export default Home;