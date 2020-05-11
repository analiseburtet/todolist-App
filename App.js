import React, { useState, useEffect } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Container } from "./src/components/ComponentsLib";
import Header from "./src/components/Header";
import CreateTask from "./src/components/CreateTask";
import TaskList from "./src/components/TaskList";

export default function App() {
  const [data, setData] = useState([]);

  const saveTask = async (id, value) => {
    const unixTimestamp = id;
    await AsyncStorage.setItem(
      unixTimestamp,
      JSON.stringify({ value, done: false })
    );
    setData([...data, { key: id, value, done: false }]);
  };

  useEffect(() => {
    const getData = async () => {
      let data = null;
      try {
        data = (await displayData()).map(([key, value]) => {
          const finalValue = JSON.parse(value);
          return { key, ...finalValue };
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        data = [];
      }
      setData(data);
    };
    getData();
  }, []);

  const deleteTask = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      const filteredData = data.filter((task) => task.key !== key);
      setData(filteredData);
    } catch (error) {
      console.log(error, "imposible to delete item");
    }
  };

  const onDoneToggle = async ({ key, done, value }) => {
    await AsyncStorage.setItem(
      key,
      JSON.stringify({
        done: !done,
        value,
      })
    );
    const newList = data.map((myTask) =>
      myTask.key === key
        ? {
            ...myTask,
            done: !myTask.done,
          }
        : myTask
    );
    setData(newList);
  };

  return (
    <Container main>
      <Header />
      <CreateTask saveTask={saveTask} />
      {/* open tasks */}
      <TaskList
        data={data.filter((task) => !task.done)}
        onDelete={deleteTask}
        tag="OPEN TASKS"
        onDoneToggle={onDoneToggle}
      />
      <TaskList
        data={data.filter((task) => !!task.done)}
        onDelete={deleteTask}
        tag="DONE TASKS"
        onDoneToggle={onDoneToggle}
      />
    </Container>
  );
}

const displayData = async () => {
  let objects = null;
  try {
    let keys = null;
    try {
      keys = await AsyncStorage.getAllKeys();
      objects = await AsyncStorage.multiGet(
        keys.filter((key) => !!parseInt(key, 10))
      );
      return objects;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
