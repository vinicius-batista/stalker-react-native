import React, { useState, useContext } from 'react'
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native'
import PersonContext from '../PersonContext'
import { NavigationScreenProps } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  input: {
    fontSize: 20,
    backgroundColor: '#DAE1E7',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    width: 400,
    height: 100
  }
})

function NewPerson(props: NavigationScreenProps) {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    job: '',
    birthday: '',
    phone: '',
    description: ''
  })

  const Person = useContext(PersonContext)

  const updateInput = (name: string) => (value: string) => {
    setInput({ ...input, [name]: value })
  }

  function onSave() {
    Person.addPerson(input)
    props.navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First name"
        onChangeText={updateInput('firstName')}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        onChangeText={updateInput('lastName')}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={updateInput('age')}
      />
      <TextInput
        style={styles.input}
        placeholder="Job"
        onChangeText={updateInput('job')}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        onChangeText={updateInput('birthday')}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={updateInput('phone')}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={updateInput('description')}
      />
      <View style={styles.button}>
        <Button title="SAVE" color="#2779BD" onPress={onSave} />
      </View>
    </ScrollView>
  )
}

export default NewPerson
