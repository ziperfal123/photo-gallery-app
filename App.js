import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
// import { Provider } from "react-redux";
// import store from "./src/store";

import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F5FCFF"
    backgroundColor: "#FD565D"
  },
  instructions: {
    // textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 30
  }
});

const AppStackNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    FavoritesScreen: { screen: FavoritesScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const NavigatorContainer = createAppContainer(AppStackNavigator);
export default NavigatorContainer;
