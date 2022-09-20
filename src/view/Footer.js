import React from "react"
import FooterLeft from "../components/footer/FooterLeft"
import FooterRight from "../components/footer/FooterRight"

function Footer (props) {
    return (
        <div className="home-footer">
            <FooterLeft></FooterLeft>
            <FooterRight></FooterRight>
        </div>
    );
}

export default Footer;