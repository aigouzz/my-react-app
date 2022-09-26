import React from "react"
import Todo from './Todo'

export function TodoList (props) {
    return (
        <ul>
            {props.todos.map(todo => {
                return <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)}></Todo>
            })}
        </ul>
    )
}