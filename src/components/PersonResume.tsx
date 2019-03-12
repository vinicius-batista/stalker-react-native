import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IPerson } from '../PersonContext'

interface IProps {
  person: IPerson
  pressPersonHandler: (person: IPerson) => boolean
}

function PersonResume (props: IProps) {
  const { person, pressPersonHandler } = props

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => pressPersonHandler(person)}
    >
      <Text style={styles.name}>
        {`${person.firstName} ${person.lastName}`}
      </Text>
      <Text style={styles.age}>{`${person.age} years old`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
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
