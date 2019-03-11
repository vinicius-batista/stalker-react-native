import React, { useState } from 'react'
import { createAppContainer } from 'react-navigation'
import PersonContext, { IPerson } from './PersonContext'
import AppNavigator from './AppNavigator'

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
