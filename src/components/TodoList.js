import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import TodoListItem from './TodoListItem'
import { toggleTodo, updateTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchUpdateTodo}) => (
    <View>
        {todos.map(todo => 
            <TodoListItem 
                key={todo.id} 
                todo={todo} 
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => { dispatchUpdateTodo(todo)}}
            />
        )}
    </View>
)

let mapStateToProps = state => {
    const { todos } = state
    return { todos }
}

export default connect(mapStateToProps, {
    dispatchToggleTodo: toggleTodo,
    dispatchUpdateTodo: updateTodo
})(TodoList);

const styles = StyleSheet.create({
    
});
