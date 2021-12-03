import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { buttons } from "../constants";

const Pad = ({handleClick}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        data={buttons}
        keyExtractor={(button) => button.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.button} onPress={() => handleClick(item.value)} >
              <Text style={styles.text}>{item.id}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={4}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    margin: 5,
    backgroundColor: "orange",
    borderRadius: 50
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default Pad;
