import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bienvenue</Text>
        </View>
        <View style={styles.container2}>
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
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.textButton}>Bonjour !</Text>
          </TouchableOpacity>
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
  container2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  button: {
    flex: 1,
    height: 44,
    backgroundColor: "#49A698",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10
  },
  textButton: {
    textAlign: "center",
    color: "white"
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
