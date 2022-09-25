import React from "react"
import { connect } from "react-redux"
import AddTodo from '../components/EditPage/AddTodo'
import VisibleTodoList from '../components/EditPage/VisibleTodoList'
import TodoFooter from '../components/EditPage/TodoFooter'

function EditPage () {
    return (
        <>
        <AddTodo></AddTodo>
        <VisibleTodoList ></VisibleTodoList>
        <TodoFooter ></TodoFooter>
        </>
    );
}
// const mapStateToProps = (state, props) => {
//     return {
//         todos: state.todos,
//         filter: state.filter
//     }
// }

export default connect()(EditPage)