import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        // barStyle="default"
        // backgroundColor="#fff"
        // hidden={false}
        // animated={true}
        />
        <Text style={styles.text}>@=@ FELIPE @=@ FELIPE @=@ </Text>
        <TextInput style={styles.input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#412'
  },
  input: {
    borderColor: "gray",
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    color: 'black'
  },
  container: {
    flex: 1,
    padding: 24,
  }
});
