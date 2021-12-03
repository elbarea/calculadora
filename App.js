import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import symbols from "./constants";

//Componentes custom
import Display from "./components/display";
import History from "./components/history";
import Pad from "./components/pad";
//Funciones
import {resolve, rotate} from './utils/operations'

const initialState = { value: "", result: "", history: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case symbols.reverse:
      return { ...state, value: rotate(state.value) };
    case symbols.clear:
      return {...state, value: "", result: ""};
    case symbols.clearHistory:
      return initialState;
    case symbols.equal:
      let res = resolve(state.value);
      return { ...state, result: res, history: [...state.history, res] };
    default:
      return { ...state, value: state.value + action.payload };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (item) => {
    dispatch({ type: item, payload: item });
  };

  return (
    <View style={styles.container}>
      <History history={state.history}/>
      <Display value={state.value} result={state.result} />
      <Pad handleClick={handleClick} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 70,
  },
});
