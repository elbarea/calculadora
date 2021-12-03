import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Display = ({ result, value }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {result || value ? (
          <View>
            <Text style={styles.result}>{result}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ) : (
          <Text style={styles.default}>Operation</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    height: 100,
    width: "80%",
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "rgb(221, 210, 210)",
    padding: 10,
  },
  default: {
    fontSize: 30,
  },
  operations: {
    display: "flex",
    justifyContent: "space-around",
  },
  result: {
    fontSize: 25,
  },
  value: {
    fontSize: 30,
  },
});

export default Display;
