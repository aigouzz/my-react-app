import React from "react"
import { AboutRightArray } from '@src/api/defaultData'

function AboutRight () {
    let children = (arr) => {
        return (arr.map((item, index) => {
            return <li key={item.url}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                    <img src={item.image} alt={item.title} />
                </a>
            </li>
        }))
    }
    return (
        <div className="about-right">
            <ul className="clearfix">
                {children(AboutRightArray)}
            </ul>
        </div>
    )
}

export default AboutRight;