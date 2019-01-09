import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const fetch = require("node-fetch");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handlePress} title="Press me" />
      </View>
    );
  }

  handlePress = () => {
    {
      fetch("http://localhost:3000/api/Member")
        .then(response => response.json())
        .then(data => {
          console.log(data); // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error));
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
