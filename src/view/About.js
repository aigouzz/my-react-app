import React from "react"
import Header from "./Header"
import AboutLeft from '@src/components/about/Left'
import AboutRight from '@src/components/about/Right'
import AboutMiddle from "../components/about/Middle"

function About () {
    return (
        <>
        <Header></Header>
        <div className="home-about">
            <AboutLeft></AboutLeft>
            <AboutRight></AboutRight>
        </div>
        <AboutMiddle></AboutMiddle>
        </>
    )
}

export default About
