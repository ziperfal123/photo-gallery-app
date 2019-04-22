import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});

export default class FavoritesScreen extends Component {
  static navigationOptions = () => {
    let title = "Favorites";
    return { title };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>FavoritesScreen!</Text>
      </View>
    );
  }
}
