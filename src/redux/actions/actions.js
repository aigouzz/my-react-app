
export function addTodo (text, id) {
    return {
        type: 'ADD_TODO',
        id,
        text,
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addShop = (text, id) => {
    return {
        type: 'ADD_SHOP',
        text,
        id,
    }
}

export const deleteShop = (id) => {
    return {
        type: 'DELETE_SHOP',
        id
    }
}