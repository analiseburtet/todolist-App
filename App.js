import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container } from './src/components/ComponentsLib'
import Header from './src/components/Header'
import ModalTask from './src/components/Modal'
import TaskList from './src/components/TaskList'
import DoneList from './src/components/DoneList'

export default function App() {
  const [ modalVisible, setModalVisible ] = useState(false)
  return(
    <Container main>
      <Header/>
      <TaskList/>
      <DoneList/>
      <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        onPress={() => setModalVisible(!modalVisible)}  
      >
        <Image
          source={require('./assets/plus.png')}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>    
      <ModalTask/>
    </Container>
  )
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});