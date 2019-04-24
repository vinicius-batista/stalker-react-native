import React, { useState, useContext } from 'react'
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native'
import PersonContext, { Person } from '../PersonContext'
import { NavigationScreenProps } from 'react-navigation'
import Camera from '../components/Camera'
import { TakePictureResponse } from 'react-native-camera/types'
import Gallery from '../components/Gallery'

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
    height: 100,
    marginTop: 4
  }
})

function NewPerson(props: NavigationScreenProps) {
  const [input, setInput] = useState<Person>({
    firstName: '',
    lastName: '',
    age: 0,
    job: '',
    birthday: '',
    phone: '',
    description: '',
    photos: []
  })

  const Person = useContext(PersonContext)
  const [isCameraVisible, setIsCameraVisible] = useState(false)

  const updateInput = (name: string) => (value: string) => {
    setInput({ ...input, [name]: value })
  }

  function takePictureHandler(response: TakePictureResponse) {
    setInput({ ...input, photos: [...input.photos, response.uri] })
    setIsCameraVisible(false)
  }

  function onSave() {
    Person.addPerson(input)
    props.navigation.goBack()
  }

  return isCameraVisible ? (
    <Camera onTakePicture={takePictureHandler} />
  ) : (
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
      <Gallery photos={input.photos} />
      <View style={styles.button}>
        <Button
          title="TAKE A PIC"
          color="#2779BD"
          onPress={() => setIsCameraVisible(true)}
        />
      </View>
      <View style={styles.button}>
        <Button title="SAVE" color="#2779BD" onPress={onSave} />
      </View>
    </ScrollView>
  )
}

export default NewPerson
