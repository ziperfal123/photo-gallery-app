import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import FullImageDisplayScreen from './src/screens/FullImageDisplayScreen'

const AppStackNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    FavoritesScreen: { screen: FavoritesScreen },
    FullScreenDisplay: { screen: FullImageDisplayScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#8b5d5d'
      },
      headerTintColor: '#f0e9e9',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const NavigatorContainer = createAppContainer(AppStackNavigator)
export default NavigatorContainer
