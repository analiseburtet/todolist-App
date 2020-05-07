import React, { useState } from 'react';
import { Container } from './ComponentsLib'
import { TouchableOpacity, TouchableHighlight ,Text, TextInput, AsyncStorage, Modal} from 'react-native'
import Moment from 'moment'

const ModalTask = (props) => {
    const [ value, onChangeText ] = useState('Type task here...')
    return (
        <Container modal>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Container>
                <TouchableOpacity
                    primary
                    onPress = { () => getAllData() }
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    primary
                    onPress = { () => saveTask(Moment().unix(), value) }
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </Container>
            <Modal
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    console.log('fechou')
                }}
            >
            <Text>Modal here</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
      </Modal>
        </Container>
    )
}

export default ModalTask

const saveTask = async (key, value) =>{
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
};

const getAllData = () =>{
    AsyncStorage.getAllKeys().then(async (keys) => {
      try {
            const result = await AsyncStorage.multiGet(keys);
            console.log(result);
        }
        catch (e) {
            console.log(e);
        }
    });
}