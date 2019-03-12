import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import NewPerson from './screens/NewPerson'
import People from './screens/People'

const AppNavigator = createStackNavigator(
  {
    Home,
    NewPerson,
    People
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Stalker'
    }
  }
)

export default AppNavigator
