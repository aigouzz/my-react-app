import * as React from 'react'
import img from '@/favicon.ico'

class HomeMiddle extends React.Component {
    render() {
        return (
            <div className='home-middle'>
                <img src={img} alt='图片'/>
            </div>
        )
    }
}

export default HomeMiddle;