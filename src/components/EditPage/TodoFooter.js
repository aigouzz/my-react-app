import React from "react"
import TodoShow from './TodoShow'
import { VisibilityFilters } from "../../redux/actions/actions"

const TodoFooter = () => {
    return <>
    <span>show:</span>
    <TodoShow filter={VisibilityFilters.SHOW_ALL}>all</TodoShow>
    <TodoShow filter={VisibilityFilters.SHOW_ACTIVE}>active</TodoShow>
    <TodoShow filter={VisibilityFilters.SHOW_COMPLETED}>completed</TodoShow>
    </>
}

export default TodoFooter;