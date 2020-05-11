import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SubTitle } from './ComponentsLib'

function Item({ task, id }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{task}</Text>
            <TouchableOpacity>
                <Image
                    style={styles.button}
                    source={require('../../assets/can.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const TaskList = ({ data }) => {
    return(
        <SafeAreaView>
            <SubTitle>TO DO</SubTitle>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Item task={item} />
                )}
            />
        </SafeAreaView>
    )
}

export default TaskList

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30
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
      borderRadius: 3
    },
    text: {
      color: "#333333"
    }
});
