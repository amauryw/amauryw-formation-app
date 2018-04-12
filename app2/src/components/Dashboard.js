import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

import Profile from "./Profile";
import Repositories from "./Repositories";
import { api } from "../utils/api";
import Notes from "./Notes";

var styles = StyleSheet.create({
  mainContainer: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center"
  }
});

export default class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "center",
      flex: 1
    };
    if (btn === 0) {
      obj.backgroundColor = "blue";
    } else if (btn === 1) {
      obj.backgroundColor = "red";
    } else {
      obj.backgroundColor = "yellow";
    }

    return obj;
  }
  goToProfile() {
    this.props.navigator.push({
      title: "Profile",
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  goToNotes() {
    api.getNotes(this.props.userInfo.login).then(res => {
      res = res || {};
      this.props.navigator.push({
        title: "Notes",
        component: Notes,
        passProps: { userInfo: this.props.userInfo, notes: res }
      });
    });
  }
  goToRepos() {
    api.getRepos(this.props.userInfo.login).then(res => {
      this.props.navigator.push({
        title: "Repositories",
        component: Repositories,
        passProps: { userInfo: this.props.userInfo, repos: res }
      });
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={{ uri: this.props.userInfo.avatar_url }}
          style={styles.image}
        />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
