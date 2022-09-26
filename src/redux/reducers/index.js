import { combineReducers } from "redux"
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"
import shops from './shops'

export default combineReducers({
    todos,
    visibilityFilter,
    shops,
})