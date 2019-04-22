import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import NavigatorContainer from "./App";
import store from "./src/store";

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Application);
