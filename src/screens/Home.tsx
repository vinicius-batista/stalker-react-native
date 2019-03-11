import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface IProps {}

function Home (props: NavigationScreenProps<IProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title='NEW'
          color='#2779BD'
          onPress={() => props.navigation.navigate('NewPerson')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='LIST'
          onPress={() => props.navigation.navigate('People')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    width: 400,
    height: 100
  }
})

export default Home
