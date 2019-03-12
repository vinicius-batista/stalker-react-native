import React, { useContext } from 'react'
import { ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import PersonContext, { IPerson } from '../PersonContext'
import PersonResume from '../components/PersonResume'
import { NavigationScreenProps } from 'react-navigation'

function People (props: NavigationScreenProps) {
  const Person = useContext(PersonContext)

  const pressPersonHandler = (person: IPerson) =>
    props.navigation.navigate('Person', {
      person
    })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={Person.people}
        keyExtractor={(item, index) => item.firstName}
        renderItem={({ item }) => (
          <PersonResume person={item} pressPersonHandler={pressPersonHandler} />
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    padding: 10
  }
})

export default People
