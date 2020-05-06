import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container } from './src/components/ComponentsLib'
import Header from './src/components/Header'
import Modal from './src/components/Modal'
import TaskList from './src/components/TaskList'
import DoneList from './src/components/DoneList'

export default function App() {
  return(
    <Container main>
      <Header/>
      <TaskList/>
      <DoneList/>
      <TouchableOpacity
        style={styles.TouchableOpacityStyle}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>    
      <Modal/>
    </Container>
  )
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: 'absolute',
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
    height: 50
  },
});