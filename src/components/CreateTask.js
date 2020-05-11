import React, { useState } from 'react';
import { Container } from './ComponentsLib'
import { TouchableOpacity, Text, TextInput, AsyncStorage, StyleSheet } from 'react-native'
import Moment from 'moment'

const CreateTask = ({ saveTask }) => {
    const [ value, onChangeText ] = useState('')
    return (
        <Container modal>
          <TextInput
              style={styles.input}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <TouchableOpacity
              style={styles.button}
              onPress = { () => {
                if(!value){
                  alert('Please type task.')
                }
                else {
                  let id = Moment().unix()
                  saveTask( id, value)
                  onChangeText('')
                }
                }
              }
          >
            <Text>Save</Text>
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
  }
})

export default CreateTask