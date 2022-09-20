import React from 'react'

export function AboutMiddleList (props) {
    let deleteItem = (e) => {
        props.onDelete(e.target.dataset.id);
    }
    return (
        <>
        {
            props.list.map((item, index) => {
                return (
                    <li key={item.id}>
                        <span>{index + 1}:{item.title}</span>
                        <i onClick={deleteItem} data-id={item.id}>x</i>
                    </li>
                )
            })
        }
        </>
    )
}