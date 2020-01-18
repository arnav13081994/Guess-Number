import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number!' />
      <StartGameScreen title="Start a new Game?" />
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  }

});
