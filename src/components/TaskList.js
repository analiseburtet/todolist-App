import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { SubTitle, Container } from "./ComponentsLib";

function Item({ task, onDelete, onDoneToggle }) {
  return (
    <View style={styles.item} key={task.key}>
      <Container item>
        <TouchableOpacity onPress={() => onDoneToggle(task)}>
          <Text>{task.done 
            ? 
              <Image style={styles.square} source={require('../../assets/checked.png')} /> 
            :
              <Image style={styles.square} source={require('../../assets/square.png')} />}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{task.value}</Text>
        <TouchableOpacity onPress={() => onDelete(task.key)}>
          <Image style={styles.button} source={require("../../assets/can.png")} />
        </TouchableOpacity>
      </Container>
    </View>
  );
}

const TaskList = ({ data, onDelete, tag, onDoneToggle }) => {
  return (
    <SafeAreaView>
      <SubTitle>{tag}</SubTitle>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Item task={item} onDelete={onDelete} onDoneToggle={onDoneToggle} />
        )}
      />
    </SafeAreaView>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
  },
  square: {
    width: 20,
    height: 20
  },
  item: {
    alignItems: "flex-start",
    flexGrow: 1,
    marginLeft: 12,
    marginRight: 12,
    margin: 4,
    padding: 12,
    borderRadius: 3,
  },
  text: {
    color: "#333333",
  },
});
