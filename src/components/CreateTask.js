import React, { useState } from 'react';
import { Container } from './ComponentsLib'
import { TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import Moment from 'moment'

const CreateTask = ({ saveTask }) => {
    const [ value, onChangeText ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    return (
        <Container modal>
          <Container>
          <TextInput
              placeholder='Type task here...'
              style={styles.input}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.error}>{errorMessage}</Text>
          </Container>
          <TouchableOpacity
              style={styles.button}
              onPress = { () => {
                if(!value){
                  setErrorMessage('Required field.')
                }
                else {
                  let id = Moment().unix().toString()
                  saveTask( id, value)
                  onChangeText('')
                }
                }
              }
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 33,
    borderWidth: 2,
    borderRadius: 3,
    paddingLeft: 10
  },
  button: {
    backgroundColor: 'palevioletred',
    borderRadius: 3,
    borderWidth: 2,
    margin: 1,
    padding: 6,
    marginLeft: 10
  },
  error: {
    color: 'red'
  }
})

export default CreateTask