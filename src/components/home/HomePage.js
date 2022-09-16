import React from "react"
import { postRequest } from '../../api/request'
import { HomePageUrl } from '../../api/url'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        postRequest(HomePageUrl, {page: 1}).then((data) => {
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
                <a href={element.href} target="_blank" rel="noreferrer">{element.title}</a>
              </li>  
            })}
        </ul>);
        return (<div className="home-page">
            {this.state.list.length ? content : ''}
        </div>)
    }
}

export default HomePage; 