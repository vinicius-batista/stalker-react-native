import React, { useState } from 'react'
import { createAppContainer } from 'react-navigation'
import PersonContext, { Person } from './PersonContext'
import AppNavigator from './AppNavigator'

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  const [people, setPeople] = useState<Person[]>([])

  function addPerson(person: Person) {
    setPeople([...people, person])
  }

  return (
    <PersonContext.Provider value={{ people, addPerson }}>
      <AppContainer />
    </PersonContext.Provider>
  )
}
