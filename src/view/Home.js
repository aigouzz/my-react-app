import * as React from 'react'
import Banner from '../components/home/Banner'
import HomeMiddle from '../components/home/HomeMiddle'
import '../styles/home/index.sass'

class Home extends React.Component {
    render() {
        return (    
        <div className='home-container'>
            <Banner></Banner>
            <HomeMiddle></HomeMiddle>
        </div>
        )
    }
}

export default Home;