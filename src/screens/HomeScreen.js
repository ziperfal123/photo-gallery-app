import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  }
});

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let title = "HomeScreen";
    let headerRight = (
      <Button
        containerStyle={{ margin: 5, padding: 10, backgroundColor: "purple" }}
        style={{ fontSize: 20, color: "white" }}
        onPress={() => navigation.navigate("FavoritesScreen")}
        title="Favorites"
      />
    );

    return { title, headerRight };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>HOMESCREEN!</Text>
      </View>
    );
  }
}
