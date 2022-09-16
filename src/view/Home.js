import * as React from 'react'
import Banner from '../components/home/Banner'
import HomeMiddle from '../components/home/HomeMiddle'
import HomePage from '../components/home/HomePage'


class Home extends React.Component {
    render() {
        return (    
        <div className='home-container'>
            <Banner></Banner>
            <HomePage></HomePage>
            <HomeMiddle></HomeMiddle>
        </div>
        )
    }
}

export default Home;