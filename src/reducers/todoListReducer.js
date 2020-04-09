
import { ADD_TODO, UPDATE_EXISTING_TODO, TOGGLE_TODO } from '../actions'

let nexId = 1

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('addtodo chamado', nexId ,action.text)
            const newTodo = {
                id: nexId++,
                text: action.text,
                done: false
            }
            return [...state, newTodo]
        case UPDATE_EXISTING_TODO:
            const updateState = state.map((todo) => {
                if(todo.id == action.todo.id){
                    return action.todo
                }
                return todo
            })
            console.log('todo existente alterado', updateState)
            return updateState
        case TOGGLE_TODO:
            const newState = state.map((todo) => {
                if(todo.id == action.todoId){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
            console.log('toggletodo chamado', newState)
            return newState
        default:
            return state
    }
}

export default todoListReducer