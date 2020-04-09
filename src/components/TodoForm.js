import React, { Component } from 'react';
import { View, Button, StyleSheet} from 'react-native';

import Input from '../components/Input'
import { connect } from 'react-redux';
import { addTodo, updateExistingTodo, updateTodoText } from '../actions';

class TodoForm extends Component {

    onChangeText(text){
        this.props.dispatchUpdateTodoText(text)
    }

    onPress(){
        const { todo } = this.props

        if(todo.id){
            this.props.dispatchUpdateExistingTodo(todo)
        } else {
            this.props.dispatchAddTodo(todo.text)
        }
    }

    render() {

        const { text, id } = this.props.todo
        
        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.containerButton}>
                <Button 
                    title={ id ? 'UPDATE' : 'ADD' } 
                    onPress={() => this.onPress() }
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    containerInput:{
        flex: 4
    },
    containerButton:{
        flex: 2
    }
})

const mapStateToProps = state => {
    const { todo } = state
    return { todo }
}

export default connect(mapStateToProps, {
    dispatchAddTodo: addTodo,
    dispatchUpdateExistingTodo: updateExistingTodo,
    dispatchUpdateTodoText: updateTodoText
})(TodoForm)