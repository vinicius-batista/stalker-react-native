import React, { useContext } from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import PersonContext, { IPerson } from '../PersonContext'
import PersonResume from '../components/PersonResume'
import { NavigationScreenProps } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    padding: 10
  }
})

function People(props: NavigationScreenProps) {
  const Person = useContext(PersonContext)

  const pressPersonHandler = (person: IPerson) =>
    props.navigation.navigate('Person', {
      person
    })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={Person.people}
        keyExtractor={item => item.firstName}
        renderItem={({ item }) => (
          <PersonResume person={item} pressPersonHandler={pressPersonHandler} />
        )}
      />
    </ScrollView>
  )
}

export default People
