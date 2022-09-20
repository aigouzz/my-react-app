import React from "react"
import { AboutLeftArray } from '@src/api/defaultData'

function AboutLeft () {
    let children = (arr) => {
        return (arr.map((item, index) => {
            return <li key={item.url}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                    <img src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                </a>
            </li>
        }))
    }
    return (
        <div className="about-left">
            <ul className="clearfix">
                {children(AboutLeftArray)}
            </ul>
        </div>
    )
}

export default AboutLeft;