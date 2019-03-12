import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IPerson } from '../PersonContext'

interface IProps {
  person: IPerson
}

function PersonResume (props: IProps) {
  const { person } = props

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {`${person.firstName} ${person.lastName}`}
      </Text>
      <Text style={styles.age}>{`${person.age} years old`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2
  },
  name: {
    fontSize: 18,
    color: '#22292F',
    textAlign: 'center'
  },
  age: {
    fontSize: 18,
    color: '#606F7B',
    textAlign: 'center'
  }
})

export default PersonResume
