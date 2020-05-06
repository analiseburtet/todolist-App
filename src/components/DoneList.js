import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SubTitle } from './ComponentsLib'

const DATA = [
    { id: "00", task: "Buy food." },
    { id: "01", task: "Call Nancy." },
    { id: "02", task: "Feed dogs and cats." },
    { id: "03", task: "Take some cat photos." }
]

const DoneList = () => {
    return(
        <SafeAreaView>
            <SubTitle>DONE</SubTitle>
            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.task}</Text>
                </View>
                );
            }}
            />
        </SafeAreaView>
    )
}

export default DoneList

const styles = StyleSheet.create({
    item: {
      alignItems: "flex-start",
      borderColor: "gainsboro",
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
