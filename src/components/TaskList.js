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
import { SubTitle } from "./ComponentsLib";

function Item({ task, onDelete, onDoneToggle }) {
  return (
    <View style={styles.item} key={task.key}>
      <Text style={styles.text}>{task.value}</Text>
      <TouchableOpacity onPress={() => onDelete(task.key)}>
        <Image style={styles.button} source={require("../../assets/can.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDoneToggle(task)}>
        <Text>{task.done ? "-X-" : "NOT DONE"}</Text>
      </TouchableOpacity>
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
  item: {
    alignItems: "flex-start",
    borderColor: "palevioletred",
    borderWidth: 2,
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
