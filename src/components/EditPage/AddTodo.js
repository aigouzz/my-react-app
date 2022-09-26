import React from "react"
import { connect } from "react-redux"
import { addTodo } from '../../redux/actions/actions'

function AddTodo (props) {
    let input;
    return (
        <>
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            props.dispatch(addTodo(input.value, props.todos.length + 1));
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
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(AddTodo);