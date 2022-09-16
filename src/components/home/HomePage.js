import React from "react"
import { postRequest } from '../../api/request'
import { HomePageUrl } from '../../api/url'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        postRequest(HomePageUrl, {page: 1}).then((data) => {
            console.log(data)
            this.setState({
                list: data.data
            });
        }, err => {
            console.log(err)
        });
    }
    render() {
        return (<div className="home-page">
            <ul>
                {this.state.list.map((element, index) => {
                  return <li key={element.id}>
                    <a href={element.href} target="_blank" rel="noreferrer">{element.title}</a>
                  </li>  
                })}
            </ul>
        </div>)
    }
}

export default HomePage; 