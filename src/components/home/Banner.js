import * as React from 'react'
import {GetHomeSearch} from '../../api/url'
import Tips from '../common/Tips'
import img from '@/logo192.png'

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'default',
            list: []
        }
        this.change = this.change.bind(this);
        this.search = this.search.bind(this);
    }
    search() {
        const data = {value: this.state.value};
        GetHomeSearch(data).then((data) => {
            console.log(data);
            this.setState({
                list: data.data.list
            });
        })
    }
    change(e) {
        this.setState({
            value: e.target.value,
            list: []
        });
    }
    goNextPage(e) {
        let url = `/search/${e.target.url}`;
        window.location.href = url;
    }
    render() {
        let dropdown = (<ul className='home-banner-drop'>
                    {this.state.list.map((item, index) => {
                        return (<li key={item.id} url={item.id} onClick={this.goNextPage}>{item.title}</li>);
                    })
                    }
        </ul>);
        return (
            <div className='home-banner'>
                <div className='home-banner-left'>
                    <img src={img} alt='' />
                </div>
                <div className='home-banner-right'>
                    <input type='text' value={this.state.value} 
                    onChange={this.change} placeholder='请输入查询信息' />
                    <button onClick={this.search}>查询</button>
                </div>
                {this.state.list.length ? dropdown : ''}
            </div>
        )
    }
}


export default Banner;