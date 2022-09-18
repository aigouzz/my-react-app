import React from "react"
import { PostHomePage } from '../../api/url'
import {Link} from 'react-router-dom'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        PostHomePage({page: 1}).then((data) => {
            this.setState({
                list: data.data.list
            });
        }, err => {
            console.log(err)
        });
    }
    render() {
        let content = (<ul>
            {this.state.list.map((element, index) => {
              return <li key={element.id}>
                <Link to={element.href}>{element.title}</Link>
              </li>  
            })}
        </ul>);
        return (<div className="home-page">
            {this.state.list.length ? content : ''}
        </div>)
    }
}

export default HomePage; 