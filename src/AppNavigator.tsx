import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import NewPerson from './screens/NewPerson'

const AppNavigator = createStackNavigator(
  {
    Home,
    NewPerson
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Stalker'
    }
  }
)

export default AppNavigator
