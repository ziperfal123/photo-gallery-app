import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Favorites: { screen: FavoritesScreen }
});

export default MainNavigator;
