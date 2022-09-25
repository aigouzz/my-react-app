import React from "react"
import { connect } from "react-redux"
import { addTodo } from '../../redux/actions/actions'

function AddTodo ({ dispatch }) {
    let input;
    return (
        <>
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}>
            <input ref={node => {
                input = node
                }} />
            <button type="submit">add todo</button>
        </form>
        </>
    )
}
export default connect()(AddTodo);