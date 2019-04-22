import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerStyle: {
    height: 80,
    width: "100%",
    backgroundColor: "red"
  }
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text>HEADER!</Text>
      </View>
    );
  }
}
