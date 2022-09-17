import React from "react"
import { FooterContext } from "../../context"

function FooterLeft() {
    return (
        <FooterContext.Consumer>
            {({right}) => {
                return <div className="home-footer-link">{right}</div>
            }}
        </FooterContext.Consumer>
    )
}

export default FooterLeft;