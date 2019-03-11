import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'

const AppNavigator = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Stalker'
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default function App () {
  return <AppContainer />
}
