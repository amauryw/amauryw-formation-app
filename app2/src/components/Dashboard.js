import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

var styles = StyleSheet.create({
  mainContainer: {
    marginTop: 65,
    flex: 1
  }
});

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> This is a dashboard.</Text>
      </View>
    );
  }
}
