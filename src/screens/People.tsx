import React, { useContext } from 'react'
import { ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import PersonContext from '../PersonContext'
import PersonResume from '../components/PersonResume'

function People () {
  const Person = useContext(PersonContext)

  return (
    <ScrollView>
      <FlatList
        data={Person.people}
        keyExtractor={(item, index) => item.firstName}
        renderItem={({ item }) => <PersonResume person={item} />}
      />
    </ScrollView>
  )
}

export default People
