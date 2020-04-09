
import { UPDATE_TODO, UPDATE_EXISTING_TODO, UPDATE_TODO_TEXT, ADD_TODO } from '../actions'

const INITIAL_TODO = {
    id: null,
    text: '',
    done: false
}

const todoReducer = (state = INITIAL_TODO, action) => {
    switch (action.type) {
        case UPDATE_TODO_TEXT:
            console.log('chamou o update texet', action.text)
            return {
                ...state,
                text: action.text
            }
        case ADD_TODO:
            return INITIAL_TODO
        case UPDATE_EXISTING_TODO:
            return INITIAL_TODO
        case UPDATE_TODO:
            console.log('chamou o update todo', action.todo)
            return action.todo
        default:
            return state
    }
}

export default todoReducer