import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import * as PersonContext from '../PersonContext'
import PersonField from '../components/PersonField'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    padding: 10
  }
})

function Person(props: NavigationScreenProps) {
  const person = props.navigation.getParam('person') as PersonContext.Person

  return (
    <ScrollView style={styles.container}>
      <PersonField fieldName="First Name" fieldValue={person.firstName} />
      <PersonField fieldName="Last Name" fieldValue={person.lastName} />
      <PersonField fieldName="Age" fieldValue={person.age} />
      <PersonField fieldName="Job" fieldValue={person.job} />
      <PersonField fieldName="Birthday" fieldValue={person.birthday} />
      <PersonField fieldName="Phone" fieldValue={person.phone} />
      <PersonField fieldName="Description" fieldValue={person.description} />
    </ScrollView>
  )
}

export default Person
