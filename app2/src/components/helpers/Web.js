import React, { Component } from "react";

import { View, Text, StyleSheet, WebView } from "react-native";

import PropTypes from "prop-types";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6EF",
    flexDirection: "column"
  }
});

export default class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: this.props.url }} />
      </View>
    );
  }
}

Web.propTypes = {
  url: PropTypes.string.isRequired
};
