import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";

import Badge from "./Badge";
import Separator from "./helpers/Separator";
import PropTypes from "prop-types";
import Web from "./helpers/Web";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10
  },
  name: {
    color: "#48BBEC",
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: "#48BBEC",
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  goToRepo(url) {
    this.props.navigator.push({
      component: Web,
      title: "web view",
      passProps: { url }
    });
  }
  render() {
    var repos = this.props.repos;
    var list = repos.map((repo, index) => {
      var desc = repo.description ? (
        <Text style={styles.description}>{repo.description} </Text>
      ) : (
        <View />
      );
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.goToRepo.bind(this, repo.html_url)}
              underlayColor="transparent"
            >
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repo.stargazers_count}</Text>
            {desc}
          </View>
          <Separator />
        </View>
      );
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    );
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};
