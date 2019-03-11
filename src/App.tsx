import React, { useState } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'
import NewPerson from './screens/NewPerson'
import PersonContext, { IPerson } from './PersonContext'

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

const AppContainer = createAppContainer(AppNavigator)

export default function App () {
  const [people, setPeople] = useState<IPerson[]>([])

  function addPerson (person: IPerson) {
    setPeople([...people, person])
  }

  return (
    <PersonContext.Provider value={{ people, addPerson }}>
      <AppContainer />
    </PersonContext.Provider>
  )
}
