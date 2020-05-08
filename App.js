import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native'
import { Container } from './src/components/ComponentsLib'
import Header from './src/components/Header'
import CreateTask from './src/components/CreateTask'
import TaskList from './src/components/TaskList'
import DoneList from './src/components/DoneList'
import Moment from 'moment'

export default function App() {
  const [ data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
        const retrievedData = (await displayData()).map(([, value]) =>
            JSON.parse(value)
        );
            if (retrievedData && retrievedData.length) {
                setData(retrievedData);
            }
        };
        getData();
    }, []);
  return(
    <Container main>
      <Header/>
      <CreateTask saveTask={saveTask}/>
      <TaskList data={data}/>
      <DoneList/>   
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

const saveTask = async (id, value) => {
  const unixTimestamp = Moment(id)
    .unix()
    .toString();
  const finalValues = { ...value }
  await AsyncStorage.setItem(unixTimestamp, JSON.stringify(value));
  setData([...data, finalValues]);
};

const displayData = async () => {
  let objects = null;
  try {
    let keys = null;
    try {
      keys = await AsyncStorage.getAllKeys();
      objects = await AsyncStorage.multiGet(keys);
      return objects;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};