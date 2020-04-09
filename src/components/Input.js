import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ onChangeText, value }) => (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
        />
);

export default Input

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc'
    }
})