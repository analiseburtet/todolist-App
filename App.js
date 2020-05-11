import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native'
import { Container } from './src/components/ComponentsLib'
import Header from './src/components/Header'
import CreateTask from './src/components/CreateTask'
import TaskList from './src/components/TaskList'
import DoneList from './src/components/DoneList'

export default function App() {
  const [ data, setData] = useState([]);
  
  const saveTask = async (id, value) => {
    const unixTimestamp = id
    const finalValues = JSON.stringify({...value})
    await AsyncStorage.setItem(unixTimestamp, JSON.stringify(finalValues));
    setData([...data, finalValues]);
  };  

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