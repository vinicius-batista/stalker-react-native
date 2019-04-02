import React from 'react'
import { RNCamera, TakePictureResponse } from 'react-native-camera'
import { View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: 400,
    height: 100
  }
})

type Props = {
  onTakePicture(response: TakePictureResponse): void
}

function Camera(props: Props) {
  async function takePicture(camera: RNCamera) {
    const options = {
      quality: 0.5,
      fixOrientation: true
    }
    const response = await camera.takePictureAsync(options)
    props.onTakePicture(response)
  }

  return (
    <RNCamera style={styles.preview} type={RNCamera.Constants.Type.back}>
      {({ camera, status }) =>
        status === 'READY' && (
          <View style={styles.button}>
            <Button
              color="#2779BD"
              title="SNAP"
              onPress={() => takePicture(camera)}
            />
          </View>
        )
      }
    </RNCamera>
  )
}

export default Camera
