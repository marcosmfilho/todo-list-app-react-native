export const ADD_TODO = 'ADD_TODO'
export const addTodo = (text) => ({
    type: ADD_TODO,
    text
})

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    todoId
})

export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
export const updateTodoText = (text) => ({
    type: UPDATE_TODO_TEXT,
    text
})

export const UPDATE_TODO = 'UPDATE_TODO'
export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    todo
})

export const UPDATE_EXISTING_TODO = 'UPDATE_EXISTING_TODO'
export const updateExistingTodo = (todo) => ({
    type: UPDATE_EXISTING_TODO,
    todo
})