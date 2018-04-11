import React, { Component } from "react";
import {
  NavigatorIOS,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";

import { api } from "../utils/api";
import Dashboard from "./Dashboard";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      error: false
    };
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username).then(res => {
      if (res.message === "Not Found") {
        this.setState({
          error: "User not found",
          isLoading: false
        });
      } else {
        this.props.navigator.push({
          component: Dashboard,
          title: res.name || "Select an Option",
          passProps: { userInfo: res }
        });
        this.setState({
          isLoading: false,
          error: false,
          username: ""
        });
      }
    });
  }
  render() {
    var showErr = this.state.error ? <Text>{this.state.error}</Text> : <View />;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Seek GitHub user</Text>
        <TextInput
          placeholder="usename"
          backgroundColor="#CCC"
          underlineColorAndroid="transparent"
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          onPress={this.handleSubmit.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        {showErr}
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#48BBEC"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "#fff"
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

module.exports = Main;
