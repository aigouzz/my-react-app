import * as React from 'react'
import {getRequest} from '../../api/request'

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'default'
        }
        this.change = this.change.bind(this);
        this.search = this.search.bind(this);
    }
    search() {
        const url = `/home/search?value=${this.state.value}`
        getRequest(url).then((data) => {
            console.log(data);
        })
    }
    change(e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div className='home-banner'>
                <div className='home-banner-left'>
                    <img src='' alt='' />
                </div>
                <div className='home-banner-right'>
                    <input type='text' value={this.state.value} 
                    onChange={this.change} placeholder='请输入查询信息' />
                    <button onClick={this.search}>查询</button>
                </div>
            </div>
        )
    }
}


export default Banner;