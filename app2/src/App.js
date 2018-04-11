// @flow

import React, { Component } from "react";
import { NavigatorIOS, Text, View, StyleSheet } from "react-native";

var Main = require("./components/Main");

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  }
});

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: "Github Notetaker"
        }}
        style={styles.container}
      />
    );
  }
}
