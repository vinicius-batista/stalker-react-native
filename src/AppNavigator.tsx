import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import NewPerson from './screens/NewPerson'
import People from './screens/People'
import Person from './screens/Person'

const AppNavigator = createStackNavigator(
  {
    Home,
    NewPerson,
    People,
    Person
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Stalker'
    }
  }
)

export default AppNavigator
