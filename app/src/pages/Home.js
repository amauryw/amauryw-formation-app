import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bienvenue</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            placeholder="Entrez votre prénom"
            blurOnSubmit={false}
            returnKeyType="done"
            placeholderTextColor="#757375"
            underlineColorAndroid="transparent"
            style={styles.nameField}
          />
        </View>
        <View style={styles.spacer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeTitle: {
    color: "#49A698",
    fontSize: 30
  },
  spacer: {
    flex: 1
  },
  nameField: {
    backgroundColor: "#FAF7F7",
    height: 44,
    textAlign: "center"
  },
  nameInput: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  }
});
