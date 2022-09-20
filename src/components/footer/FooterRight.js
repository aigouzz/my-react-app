import React from "react"
import { FooterContext } from "../../context"

function FooterRightLink (props) {
    return (
        <li>
            <a href={props.url} target='_blank' rel="noreferrer">
            {props.text}
            </a>
        </li>
    )
}

function FooterRight () {
    return (
        <FooterContext.Consumer>
            {({ right, links }) => {
                return (<div className="home-footer-right">
                    <div className="home-footer-r-t">文档</div>
                    <ul>
                        {links.map((item, index) => {
                            return (<FooterRightLink text={item.text} url={item.url}
                            key={item.url}></FooterRightLink>)
                        })}
                    </ul>
                </div>)
            }}
        </FooterContext.Consumer>
    )
}

export default FooterRight;