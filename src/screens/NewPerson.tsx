import React, { useState, useContext } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image
} from 'react-native'
import PersonContext from '../PersonContext'
import { NavigationScreenProps } from 'react-navigation'
import Camera from '../components/Camera'
import { TakePictureResponse } from 'react-native-camera/types'

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
  },
  imagePreview: {
    width: 200,
    height: 200
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
    description: '',
    photo: ''
  })

  const Person = useContext(PersonContext)
  const [isCameraVisible, setIsCameraVisible] = useState(false)

  const updateInput = (name: string) => (value: string) => {
    setInput({ ...input, [name]: value })
  }

  function takePictureHandler(response: TakePictureResponse) {
    updateInput('photo')(response.uri)
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
      {input.photo !== '' && (
        <Image style={styles.imagePreview} source={{ uri: input.photo }} />
      )}
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
