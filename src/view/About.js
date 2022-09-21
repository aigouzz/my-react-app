import React from "react"
import Header from "./Header"
import AboutLeft from '@src/components/about/Left'
import AboutRight from '@src/components/about/Right'
import AboutMiddle from "@src/components/about/Middle"
import { AboutBottom } from "@src/components/about/Bottom"
import { initTheme } from "../util/initCss"

function About () {
    return (
        <>
        <Header></Header>
        <div className="home-about">
            <AboutLeft></AboutLeft>
            <AboutRight></AboutRight>
        </div>
        <AboutMiddle></AboutMiddle>
        <AboutBottom></AboutBottom>
        {/* <button onClick={() => { initTheme(document.documentElement.dataset.theme !== 'light') }}>修改背景</button> */}
        </>
    )
}

export default About
