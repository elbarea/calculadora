import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const History = ({history}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={history}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => {
        return <Text style={{textAlign: "right"}}>{item}</Text>
      }} />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    height: 150,
    width: "80%",
    borderRadius: 15,
    alignItems: "stretch",
    backgroundColor: "rgb(221, 210, 210)",
    padding: 10
  },
});

export default History;
