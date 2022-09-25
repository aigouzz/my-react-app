import React from "react"
import Todo from './Todo'

export function TodoList ({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map(todo => {
                return <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}></Todo>
            })}
        </ul>
    )
}